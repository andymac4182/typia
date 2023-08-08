import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TagRange } from "../../structures/TagRange";

export const test_json_validateParse_TagRange = _test_json_validateParse(
    "TagRange",
    TagRange.generate,
    typia.json.createValidateParse<TagRange>(),
    TagRange.SPOILERS,
);
