import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_isClone_ArrayMatrix = _test_misc_isClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => typia.misc.isClone(input),
    ArrayMatrix.SPOILERS,
);
