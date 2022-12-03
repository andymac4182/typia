import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectOptional = _test_isStringify(
    "ObjectOptional",
    ObjectOptional.generate,
    TSON.createIsStringify<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);