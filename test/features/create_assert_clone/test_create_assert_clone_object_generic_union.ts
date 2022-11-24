import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_object_generic_union = _test_assert_clone(
    "generic unioned object",
    ObjectGenericUnion.generate,
    TSON.createAssertClone<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
