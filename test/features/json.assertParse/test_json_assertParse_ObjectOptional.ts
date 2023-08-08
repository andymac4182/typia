import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_assertParse_ObjectOptional = _test_json_assertParse(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.json.assertParse<ObjectOptional>(input),
    ObjectOptional.SPOILERS,
);
