import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_json_createIsParse_DynamicUnion = _test_json_isParse(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input: any): typia.Primitive<DynamicUnion> => {
  const is = (input: any): input is DynamicUnion => {
    const $io0 = (input: any): boolean =>
      Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value) return true;
        if ("number" === typeof Number(key) && Number.isFinite(Number(key)))
          return "string" === typeof value;
        if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
          return "string" === typeof value;
        if ("string" === typeof key && RegExp(/(.*)_postfix$/).test(key))
          return "string" === typeof value;
        if (
          "string" === typeof key &&
          RegExp(
            /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
          ).test(key)
        )
          return "number" === typeof value && Number.isFinite(value);
        return true;
      });
    return (
      "object" === typeof input &&
      null !== input &&
      false === Array.isArray(input) &&
      $io0(input)
    );
  };
  input = JSON.parse(input);
  return is(input) ? (input as any) : null;
});
