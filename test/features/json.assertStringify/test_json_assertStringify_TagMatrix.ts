import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_json_assertStringify_TagMatrix = _test_json_assertStringify(
    "TagMatrix",
)<TagMatrix>(TagMatrix)((input) =>
    typia.json.assertStringify<TagMatrix>(input),
);