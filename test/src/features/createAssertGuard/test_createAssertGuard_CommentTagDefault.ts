import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createAssertGuard_CommentTagDefault = _test_assertGuard(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)(
  typia.createAssertGuard<CommentTagDefault>(),
);
