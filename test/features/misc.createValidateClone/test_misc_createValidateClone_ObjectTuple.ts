import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_validateClone_ObjectTuple = _test_misc_validateClone(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.misc.createValidateClone<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
