import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_assertStringify_TupleRestObject =
    _test_json_assertStringify(
        "TupleRestObject",
        TupleRestObject.generate,
        typia.json.createAssertStringify<TupleRestObject>(),
        TupleRestObject.SPOILERS,
    );
