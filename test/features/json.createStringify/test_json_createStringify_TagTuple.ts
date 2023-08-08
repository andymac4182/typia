import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TagTuple } from "../../structures/TagTuple";

export const test_json_stringify_TagTuple = _test_json_stringify(
    "TagTuple",
    TagTuple.generate,
    typia.json.createStringify<TagTuple>(),
);
