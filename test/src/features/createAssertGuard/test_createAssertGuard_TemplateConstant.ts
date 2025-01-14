import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createAssertGuard_TemplateConstant = _test_assertGuard(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)(
  typia.createAssertGuard<TemplateConstant>(),
);
