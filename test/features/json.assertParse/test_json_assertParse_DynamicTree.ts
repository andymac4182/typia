import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_assertParse_DynamicTree = _test_json_assertParse(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.json.assertParse<DynamicTree>(input),
    DynamicTree.SPOILERS,
);
