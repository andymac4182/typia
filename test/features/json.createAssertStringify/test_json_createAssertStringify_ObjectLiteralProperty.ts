import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_json_assertStringify_ObjectLiteralProperty =
    _test_json_assertStringify(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        typia.json.createAssertStringify<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
