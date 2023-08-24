import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { TagDefault } from "../../../structures/TagDefault";

export const test_misc_validatePrune_TagDefault = _test_misc_validatePrune(
    "TagDefault",
)<TagDefault>(TagDefault)((input) =>
    ((input: any): typia.IValidation<TagDefault> => {
        const validate = (input: any): typia.IValidation<TagDefault> => {
            const errors = [] as any[];
            const __is = (input: any): input is TagDefault => {
                const $io0 = (input: any): boolean =>
                    "boolean" === typeof input.boolean &&
                    "number" === typeof input.number &&
                    Number.isFinite(input.number) &&
                    "string" === typeof input.string &&
                    "string" === typeof input.text &&
                    "string" === typeof input.template &&
                    RegExp(/^prefix_(.*)/).test(input.template) &&
                    ("string" === typeof input.boolean_and_number_and_string ||
                        ("number" ===
                            typeof input.boolean_and_number_and_string &&
                            Number.isFinite(
                                input.boolean_and_number_and_string,
                            )) ||
                        "boolean" ===
                            typeof input.boolean_and_number_and_string) &&
                    ("string" === typeof input.union_but_boolean ||
                        ("number" === typeof input.union_but_boolean &&
                            Number.isFinite(input.union_but_boolean)) ||
                        "boolean" === typeof input.union_but_boolean) &&
                    ("string" === typeof input.union_but_number ||
                        ("number" === typeof input.union_but_number &&
                            Number.isFinite(input.union_but_number)) ||
                        "boolean" === typeof input.union_but_number) &&
                    ("string" === typeof input.union_but_string ||
                        ("number" === typeof input.union_but_string &&
                            Number.isFinite(input.union_but_string)) ||
                        "boolean" === typeof input.union_but_string) &&
                    "number" === typeof input.vulnerable_range &&
                    Number.isFinite(input.vulnerable_range) &&
                    3 <= input.vulnerable_range &&
                    5 >= input.vulnerable_range &&
                    "string" === typeof input.vulnerable_template &&
                    RegExp(/^prefix_(.*)/).test(input.vulnerable_template) &&
                    null !== input.boolean_and_number_and_template &&
                    undefined !== input.boolean_and_number_and_template &&
                    (("number" ===
                        typeof input.boolean_and_number_and_template &&
                        Number.isFinite(
                            input.boolean_and_number_and_template,
                        )) ||
                        "boolean" ===
                            typeof input.boolean_and_number_and_template ||
                        ("string" ===
                            typeof input.boolean_and_number_and_template &&
                            RegExp(/^prefix_(.*)/).test(
                                input.boolean_and_number_and_template,
                            )));
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input)) {
                const $report = (typia.misc.validatePrune as any).report(
                    errors,
                );
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagDefault => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "boolean" === typeof input.boolean ||
                                $report(_exceptionable, {
                                    path: _path + ".boolean",
                                    expected: "boolean",
                                    value: input.boolean,
                                }),
                            ("number" === typeof input.number &&
                                Number.isFinite(input.number)) ||
                                $report(_exceptionable, {
                                    path: _path + ".number",
                                    expected: "number",
                                    value: input.number,
                                }),
                            "string" === typeof input.string ||
                                $report(_exceptionable, {
                                    path: _path + ".string",
                                    expected: "string",
                                    value: input.string,
                                }),
                            "string" === typeof input.text ||
                                $report(_exceptionable, {
                                    path: _path + ".text",
                                    expected: "string",
                                    value: input.text,
                                }),
                            ("string" === typeof input.template &&
                                RegExp(/^prefix_(.*)/).test(input.template)) ||
                                $report(_exceptionable, {
                                    path: _path + ".template",
                                    expected: "`prefix_${string}`",
                                    value: input.template,
                                }),
                            "string" ===
                                typeof input.boolean_and_number_and_string ||
                                ("number" ===
                                    typeof input.boolean_and_number_and_string &&
                                    Number.isFinite(
                                        input.boolean_and_number_and_string,
                                    )) ||
                                "boolean" ===
                                    typeof input.boolean_and_number_and_string ||
                                $report(_exceptionable, {
                                    path:
                                        _path +
                                        ".boolean_and_number_and_string",
                                    expected: "(boolean | number | string)",
                                    value: input.boolean_and_number_and_string,
                                }),
                            "string" === typeof input.union_but_boolean ||
                                ("number" === typeof input.union_but_boolean &&
                                    Number.isFinite(input.union_but_boolean)) ||
                                "boolean" === typeof input.union_but_boolean ||
                                $report(_exceptionable, {
                                    path: _path + ".union_but_boolean",
                                    expected: "(boolean | number | string)",
                                    value: input.union_but_boolean,
                                }),
                            "string" === typeof input.union_but_number ||
                                ("number" === typeof input.union_but_number &&
                                    Number.isFinite(input.union_but_number)) ||
                                "boolean" === typeof input.union_but_number ||
                                $report(_exceptionable, {
                                    path: _path + ".union_but_number",
                                    expected: "(boolean | number | string)",
                                    value: input.union_but_number,
                                }),
                            "string" === typeof input.union_but_string ||
                                ("number" === typeof input.union_but_string &&
                                    Number.isFinite(input.union_but_string)) ||
                                "boolean" === typeof input.union_but_string ||
                                $report(_exceptionable, {
                                    path: _path + ".union_but_string",
                                    expected: "(boolean | number | string)",
                                    value: input.union_but_string,
                                }),
                            ("number" === typeof input.vulnerable_range &&
                                Number.isFinite(input.vulnerable_range) &&
                                (3 <= input.vulnerable_range ||
                                    $report(_exceptionable, {
                                        path: _path + ".vulnerable_range",
                                        expected: "number (@minimum 3)",
                                        value: input.vulnerable_range,
                                    })) &&
                                (5 >= input.vulnerable_range ||
                                    $report(_exceptionable, {
                                        path: _path + ".vulnerable_range",
                                        expected: "number (@maximum 5)",
                                        value: input.vulnerable_range,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".vulnerable_range",
                                    expected: "number",
                                    value: input.vulnerable_range,
                                }),
                            ("string" === typeof input.vulnerable_template &&
                                RegExp(/^prefix_(.*)/).test(
                                    input.vulnerable_template,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".vulnerable_template",
                                    expected: "`prefix_${string}`",
                                    value: input.vulnerable_template,
                                }),
                            (null !== input.boolean_and_number_and_template ||
                                $report(_exceptionable, {
                                    path:
                                        _path +
                                        ".boolean_and_number_and_template",
                                    expected:
                                        "(`prefix_${string}` | boolean | number)",
                                    value: input.boolean_and_number_and_template,
                                })) &&
                                (undefined !==
                                    input.boolean_and_number_and_template ||
                                    $report(_exceptionable, {
                                        path:
                                            _path +
                                            ".boolean_and_number_and_template",
                                        expected:
                                            "(`prefix_${string}` | boolean | number)",
                                        value: input.boolean_and_number_and_template,
                                    })) &&
                                (("number" ===
                                    typeof input.boolean_and_number_and_template &&
                                    Number.isFinite(
                                        input.boolean_and_number_and_template,
                                    )) ||
                                    "boolean" ===
                                        typeof input.boolean_and_number_and_template ||
                                    ("string" ===
                                        typeof input.boolean_and_number_and_template &&
                                        RegExp(/^prefix_(.*)/).test(
                                            input.boolean_and_number_and_template,
                                        )) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path +
                                            ".boolean_and_number_and_template",
                                        expected:
                                            "(`prefix_${string}` | boolean | number)",
                                        value: input.boolean_and_number_and_template,
                                    })),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagDefault",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "TagDefault",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            }
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const prune = (input: TagDefault): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "boolean" === key ||
                        "number" === key ||
                        "string" === key ||
                        "text" === key ||
                        "template" === key ||
                        "boolean_and_number_and_string" === key ||
                        "union_but_boolean" === key ||
                        "union_but_number" === key ||
                        "union_but_string" === key ||
                        "vulnerable_range" === key ||
                        "vulnerable_template" === key ||
                        "boolean_and_number_and_template" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        const output = validate(input);
        if (output.success) prune(input);
        return output;
    })(input),
);