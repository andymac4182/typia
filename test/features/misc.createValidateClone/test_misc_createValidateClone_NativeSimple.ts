import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_misc_validateClone_NativeSimple = _test_misc_validateClone(
    "NativeSimple",
    NativeSimple.generate,
    typia.misc.createValidateClone<NativeSimple>(),
    NativeSimple.SPOILERS,
);
