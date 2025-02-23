import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_assertGuard_NativeUnion = _test_assertGuard(
  "NativeUnion",
)<NativeUnion>(NativeUnion)((input) => typia.assertGuard<NativeUnion>(input));
