import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_random_TagMatrix = _test_random("TagMatrix")<TagMatrix>(
    TagMatrix,
)({
    random: typia.createRandom<TagMatrix>(),
    assert: typia.createAssert<TagMatrix>(),
});