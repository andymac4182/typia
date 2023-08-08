import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_isClone_DynamicEnumeration = _test_misc_isClone(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.misc.createIsClone<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
