import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_validatePrune_AtomicAlias = _test_misc_validatePrune(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.misc.validatePrune(input),
    AtomicAlias.SPOILERS,
);
