import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagArray } from "../../structures/TagArray";

export const test_protobuf_assertEncode_TagArray = _test_protobuf_assertEncode(
    "TagArray",
)<TagArray>(TagArray)({
    assertEncode: typia.protobuf.createAssertEncode<TagArray>(),
    message: typia.protobuf.message<TagArray>(),
    decode: typia.protobuf.createDecode<TagArray>(),
});