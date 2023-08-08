import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_validateParse_ObjectTuple = _test_json_validateParse(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.json.createValidateParse<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
