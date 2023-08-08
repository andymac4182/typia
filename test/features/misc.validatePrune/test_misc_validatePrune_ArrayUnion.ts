import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_misc_validatePrune_ArrayUnion = _test_misc_validatePrune(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.misc.validatePrune(input),
    ArrayUnion.SPOILERS,
);
