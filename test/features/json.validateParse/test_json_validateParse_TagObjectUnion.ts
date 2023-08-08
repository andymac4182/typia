import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_json_validateParse_TagObjectUnion = _test_json_validateParse(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.json.validateParse<TagObjectUnion>(input),
    TagObjectUnion.SPOILERS,
);
