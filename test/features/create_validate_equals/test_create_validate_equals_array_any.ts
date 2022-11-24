import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_array_any = _test_validate_equals(
    "any array",
    ArrayAny.generate,
    TSON.createValidateEquals<ArrayAny>(),
    false,
);
