import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_misc_validatePrune_ArrayAtomicSimple =
    _test_misc_validatePrune(
        "ArrayAtomicSimple",
        ArrayAtomicSimple.generate,
        (input) => typia.misc.validatePrune(input),
        ArrayAtomicSimple.SPOILERS,
    );
