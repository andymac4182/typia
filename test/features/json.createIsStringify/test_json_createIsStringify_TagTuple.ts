import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagTuple } from "../../structures/TagTuple";

export const test_json_isStringify_TagTuple = _test_json_isStringify(
    "TagTuple",
    TagTuple.generate,
    typia.json.createIsStringify<TagTuple>(),
    TagTuple.SPOILERS,
);
