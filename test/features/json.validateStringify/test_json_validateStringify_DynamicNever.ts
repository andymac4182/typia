import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_validateStringify_DynamicNever =
    _test_json_validateStringify(
        "DynamicNever",
        DynamicNever.generate,
        (input) => typia.json.validateStringify(input),
        DynamicNever.SPOILERS,
    );
