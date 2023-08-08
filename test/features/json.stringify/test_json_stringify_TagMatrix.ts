import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_json_stringify_TagMatrix = _test_json_stringify(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.json.stringify(input),
);
