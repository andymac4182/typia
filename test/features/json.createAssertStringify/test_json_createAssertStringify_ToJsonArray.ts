import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_assertStringify_ToJsonArray = _test_json_assertStringify(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.json.createAssertStringify<ToJsonArray>(),
);
