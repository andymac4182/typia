import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectInternal } from "../../../../structures/ObjectInternal";

export const test_json_application_swagger_ObjectInternal =
    _test_json_application("swagger")("ObjectInternal")({
        schemas: [
            {
                $ref: "#/components/schemas/ObjectInternal",
            },
        ],
        components: {
            schemas: {
                ObjectInternal: {
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    nullable: false,
                    required: ["id", "name"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });