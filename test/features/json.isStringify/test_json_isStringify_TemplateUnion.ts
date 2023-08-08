import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_isStringify_TemplateUnion = _test_json_isStringify(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.json.isStringify(input),
    TemplateUnion.SPOILERS,
);
