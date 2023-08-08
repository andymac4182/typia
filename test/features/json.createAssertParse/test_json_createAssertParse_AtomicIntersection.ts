import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_assertParse_AtomicIntersection = _test_json_assertParse(
    "AtomicIntersection",
    AtomicIntersection.generate,
    typia.json.createAssertParse<AtomicIntersection>(),
    AtomicIntersection.SPOILERS,
);
