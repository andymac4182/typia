import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_protobuf_message_ClassMethod = _test_protobuf_message(
    "ClassMethod",
    'syntax = "proto3";\n\nmessage ClassMethod {\n    message Animal {\n        string name = 1;\n        double age = 2;\n    }\n}',
);
