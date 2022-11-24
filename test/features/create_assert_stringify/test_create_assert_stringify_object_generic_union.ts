import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_object_generic_union =
    _test_assert_stringify(
        "generic unioned object",
        ObjectGenericUnion.generate,
        TSON.createAssertStringify<ObjectGenericUnion>(),
        ObjectGenericUnion.SPOILERS,
    );
