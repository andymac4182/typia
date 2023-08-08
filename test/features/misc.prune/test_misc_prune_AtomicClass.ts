import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_prune_AtomicClass = _test_misc_prune(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.misc.prune(input),
);
