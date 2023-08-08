import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_json_isStringify_DynamicSimple = _test_json_isStringify(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) =>
        ((input: DynamicSimple): string | null => {
            const is = (input: any): input is DynamicSimple => {
                const $join = (typia.json.isStringify as any).join;
                const $io0 = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                "number" === typeof value &&
                                Number.isFinite(value)
                            );
                        return true;
                    });
                return (
                    "object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input) &&
                    $io0(input)
                );
            };
            const stringify = (input: DynamicSimple): string => {
                const $join = (typia.json.isStringify as any).join;
                const $number = (typia.json.isStringify as any).number;
                const $so0 = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            return `${JSON.stringify(key)}:${$number(value)}`;
                        })
                        .filter((str: any) => "" !== str)
                        .join(",")}}`;
                return $so0(input);
            };
            return is(input) ? stringify(input) : null;
        })(input),
    DynamicSimple.SPOILERS,
);
