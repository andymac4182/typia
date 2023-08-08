import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_isStringify_ObjectGenericArray = _test_json_isStringify(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.json.createIsStringify<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
