import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TagArrayUnion } from "../../../structures/TagArrayUnion";

export const test_misc_isPrune_TagArrayUnion = _test_misc_isPrune(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)((input: any): input is TagArrayUnion => {
    const is = (input: any): input is TagArrayUnion => {
        const $is_uuid = (typia.misc.createIsPrune as any).is_uuid;
        const $io0 = (input: any): boolean =>
            Array.isArray(input.items) &&
            3 === input.items.length &&
            input.items.every(
                (elem: any) => "string" === typeof elem && $is_uuid(elem),
            ) &&
            Array.isArray(input.minItems) &&
            3 <= input.minItems.length &&
            input.minItems.every(
                (elem: any) =>
                    "number" === typeof elem &&
                    Number.isFinite(elem) &&
                    3 <= elem,
            ) &&
            Array.isArray(input.maxItems) &&
            7 >= input.maxItems.length &&
            input.maxItems.every(
                (elem: any) =>
                    ("string" === typeof elem && 7 >= elem.length) ||
                    ("number" === typeof elem &&
                        Number.isFinite(elem) &&
                        7 >= elem),
            ) &&
            Array.isArray(input.both) &&
            3 <= input.both.length &&
            7 >= input.both.length &&
            input.both.every(
                (elem: any) => "string" === typeof elem && $is_uuid(elem),
            );
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io0(elem),
            )
        );
    };
    const prune = (input: TagArrayUnion): void => {
        const $is_uuid = (typia.misc.createIsPrune as any).is_uuid;
        const $pp0 = (input: any) =>
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po0(elem);
            });
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "items" === key ||
                    "minItems" === key ||
                    "maxItems" === key ||
                    "both" === key
                )
                    continue;
                delete input[key];
            }
        };
        if (Array.isArray(input)) $pp0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
});