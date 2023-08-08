import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_assertPrune_AtomicClass = _test_misc_assertPrune(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.misc.assertPrune(input),
    AtomicClass.SPOILERS,
);
