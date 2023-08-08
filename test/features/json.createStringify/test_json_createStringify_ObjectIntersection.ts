import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_stringify_ObjectIntersection = _test_json_stringify(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.json.createStringify<ObjectIntersection>(),
);
