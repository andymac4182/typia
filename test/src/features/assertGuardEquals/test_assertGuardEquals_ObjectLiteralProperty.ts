import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_assertGuardEquals_ObjectLiteralProperty =
  _test_assertGuardEquals("ObjectLiteralProperty")<ObjectLiteralProperty>(
    ObjectLiteralProperty,
  )((input) => typia.assertGuardEquals<ObjectLiteralProperty>(input));
