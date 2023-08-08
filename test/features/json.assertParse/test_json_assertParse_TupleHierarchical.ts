import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_assertParse_TupleHierarchical = _test_json_assertParse(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.json.assertParse<TupleHierarchical>(input),
    TupleHierarchical.SPOILERS,
);
