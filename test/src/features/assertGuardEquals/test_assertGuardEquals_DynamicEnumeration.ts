import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_assertGuardEquals_DynamicEnumeration =
  _test_assertGuardEquals("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )((input) => typia.assertGuardEquals<DynamicEnumeration>(input));
