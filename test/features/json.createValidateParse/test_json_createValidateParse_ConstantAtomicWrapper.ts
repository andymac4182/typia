import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_validateParse_ConstantAtomicWrapper =
    _test_json_validateParse(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        typia.json.createValidateParse<ConstantAtomicWrapper>(),
        ConstantAtomicWrapper.SPOILERS,
    );
