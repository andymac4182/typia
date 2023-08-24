import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagArrayUnion } from "../../../structures/TagArrayUnion";

export const test_random_TagArrayUnion = _test_random(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Resolved<TagArrayUnion> => {
            const $generator = (typia.random as any).generator;
            const $pick = (typia.random as any).pick;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                items: (generator?.array ?? $generator.array)(
                    () =>
                        (generator?.customs ?? $generator.customs)?.string?.([
                            {
                                name: "items",
                                value: "3",
                            },
                            {
                                name: "format",
                                value: "uuid",
                            },
                        ]) ?? (generator?.uuid ?? $generator.uuid)(),
                    3,
                ),
                minItems: (generator?.array ?? $generator.array)(
                    () =>
                        (generator?.customs ?? $generator.customs)?.number?.([
                            {
                                name: "minItems",
                                value: "3",
                            },
                            {
                                name: "minimum",
                                value: "3",
                            },
                        ]) ?? (generator?.number ?? $generator.number)(3, 13),
                    (generator?.integer ?? $generator.integer)(3, 3),
                ),
                maxItems: (generator?.array ?? $generator.array)(
                    () =>
                        $pick([
                            () =>
                                (
                                    generator?.customs ?? $generator.customs
                                )?.string?.([
                                    {
                                        name: "maxItems",
                                        value: "7",
                                    },
                                    {
                                        name: "maxLength",
                                        value: "7",
                                    },
                                    {
                                        name: "maximum",
                                        value: "7",
                                    },
                                ]) ??
                                (generator?.string ?? $generator.string)(
                                    (generator?.integer ?? $generator.integer)(
                                        5,
                                        7,
                                    ),
                                ),
                            () =>
                                (
                                    generator?.customs ?? $generator.customs
                                )?.number?.([
                                    {
                                        name: "maxItems",
                                        value: "7",
                                    },
                                    {
                                        name: "maxLength",
                                        value: "7",
                                    },
                                    {
                                        name: "maximum",
                                        value: "7",
                                    },
                                ]) ??
                                (generator?.number ?? $generator.number)(-3, 7),
                        ])(),
                    (generator?.integer ?? $generator.integer)(0, 7),
                ),
                both: (generator?.array ?? $generator.array)(
                    () =>
                        (generator?.customs ?? $generator.customs)?.string?.([
                            {
                                name: "minItems",
                                value: "3",
                            },
                            {
                                name: "maxItems",
                                value: "7",
                            },
                            {
                                name: "format",
                                value: "uuid",
                            },
                        ]) ?? (generator?.uuid ?? $generator.uuid)(),
                    (generator?.integer ?? $generator.integer)(3, 7),
                ),
            });
            return (generator?.array ?? $generator.array)(() => $ro0());
        })(),
    assert: (input: any): TagArrayUnion => {
        const __is = (input: any): input is TagArrayUnion => {
            const $is_uuid = (typia.createAssert as any).is_uuid;
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
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagArrayUnion => {
                const $guard = (typia.createAssert as any).guard;
                const $is_uuid = (typia.createAssert as any).is_uuid;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input.items) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected: "Array<string>",
                            value: input.items,
                        })) &&
                        (3 === input.items.length ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected: "Array.length (@items 3)",
                                value: input.items,
                            })) &&
                        input.items.every(
                            (elem: any, _index2: number) =>
                                ("string" === typeof elem &&
                                    ($is_uuid(elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".items[" +
                                                _index2 +
                                                "]",
                                            expected: "string (@format uuid)",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".items[" + _index2 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected: "Array<string>",
                            value: input.items,
                        })) &&
                    (((Array.isArray(input.minItems) ||
                        $guard(_exceptionable, {
                            path: _path + ".minItems",
                            expected: "Array<number>",
                            value: input.minItems,
                        })) &&
                        (3 <= input.minItems.length ||
                            $guard(_exceptionable, {
                                path: _path + ".minItems",
                                expected: "Array.length (@minItems 3)",
                                value: input.minItems,
                            })) &&
                        input.minItems.every(
                            (elem: any, _index3: number) =>
                                ("number" === typeof elem &&
                                    Number.isFinite(elem) &&
                                    (3 <= elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".minItems[" +
                                                _index3 +
                                                "]",
                                            expected: "number (@minimum 3)",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minItems[" + _index3 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".minItems",
                            expected: "Array<number>",
                            value: input.minItems,
                        })) &&
                    (((Array.isArray(input.maxItems) ||
                        $guard(_exceptionable, {
                            path: _path + ".maxItems",
                            expected: "Array<string | number>",
                            value: input.maxItems,
                        })) &&
                        (7 >= input.maxItems.length ||
                            $guard(_exceptionable, {
                                path: _path + ".maxItems",
                                expected: "Array.length (@maxItems 7)",
                                value: input.maxItems,
                            })) &&
                        input.maxItems.every(
                            (elem: any, _index4: number) =>
                                ("string" === typeof elem &&
                                    (7 >= elem.length ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".maxItems[" +
                                                _index4 +
                                                "]",
                                            expected: "string (@maxLength 7)",
                                            value: elem,
                                        }))) ||
                                ("number" === typeof elem &&
                                    Number.isFinite(elem) &&
                                    (7 >= elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".maxItems[" +
                                                _index4 +
                                                "]",
                                            expected: "number (@maximum 7)",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".maxItems[" + _index4 + "]",
                                    expected: "(number | string)",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".maxItems",
                            expected: "Array<string | number>",
                            value: input.maxItems,
                        })) &&
                    (((Array.isArray(input.both) ||
                        $guard(_exceptionable, {
                            path: _path + ".both",
                            expected: "Array<string>",
                            value: input.both,
                        })) &&
                        (3 <= input.both.length ||
                            $guard(_exceptionable, {
                                path: _path + ".both",
                                expected: "Array.length (@minItems 3)",
                                value: input.both,
                            })) &&
                        (7 >= input.both.length ||
                            $guard(_exceptionable, {
                                path: _path + ".both",
                                expected: "Array.length (@maxItems 7)",
                                value: input.both,
                            })) &&
                        input.both.every(
                            (elem: any, _index5: number) =>
                                ("string" === typeof elem &&
                                    ($is_uuid(elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".both[" +
                                                _index5 +
                                                "]",
                                            expected: "string (@format uuid)",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".both[" + _index5 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".both",
                            expected: "Array<string>",
                            value: input.both,
                        }));
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagArrayUnion",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "TagArrayUnion.Type",
                                        value: elem,
                                    })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "TagArrayUnion.Type",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagArrayUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});