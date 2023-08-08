import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { MapSimple } from "../../structures/MapSimple";

export const test_misc_validateClone_MapSimple = _test_misc_validateClone(
    "MapSimple",
    MapSimple.generate,
    (input) => typia.misc.validateClone(input),
    MapSimple.SPOILERS,
);
