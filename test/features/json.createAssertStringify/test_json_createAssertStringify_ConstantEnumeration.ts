import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_assertStringify_ConstantEnumeration =
    _test_json_assertStringify(
        "ConstantEnumeration",
        ConstantEnumeration.generate,
        typia.json.createAssertStringify<ConstantEnumeration>(),
        ConstantEnumeration.SPOILERS,
    );
