import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagFormat } from "../../../../structures/CommentTagFormat";

export const test_json_application_swagger_CommentTagFormat =
    _test_json_application("swagger")("CommentTagFormat")({
        schemas: [
            {
                $ref: "#/components/schemas/CommentTagFormat",
            },
        ],
        components: {
            schemas: {
                CommentTagFormat: {
                    type: "object",
                    properties: {
                        uuid: {
                            description: "Universally Unique Identifier.",
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "uuid",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "uuid",
                            "x-typia-typeTags": [
                                {
                                    target: "string",
                                    name: 'Format<"uuid">',
                                    kind: "format",
                                    value: "uuid",
                                    validate:
                                        "/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test($input)",
                                    exclusive: true,
                                },
                            ],
                        },
                        email: {
                            description: "Email address",
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "email",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "email",
                            "x-typia-typeTags": [
                                {
                                    target: "string",
                                    name: 'Format<"email">',
                                    kind: "format",
                                    value: "email",
                                    validate:
                                        '/^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$/i.test($input)',
                                    exclusive: true,
                                },
                            ],
                        },
                        url: {
                            description: "URL address.",
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "url",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "url",
                            "x-typia-typeTags": [
                                {
                                    target: "string",
                                    name: 'Format<"url">',
                                    kind: "format",
                                    value: "url",
                                    validate:
                                        "/^[a-zA-Z0-9]+:\\/\\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test($input)",
                                    exclusive: true,
                                },
                            ],
                        },
                        ipv4: {
                            description: "IPv4 address.",
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "ipv4",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "ipv4",
                            "x-typia-typeTags": [
                                {
                                    target: "string",
                                    name: 'Format<"ipv4">',
                                    kind: "format",
                                    value: "ipv4",
                                    validate:
                                        "/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test($input)",
                                    exclusive: true,
                                },
                            ],
                        },
                        ipv6: {
                            description: "IPv6 address.",
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "ipv6",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "ipv6",
                            "x-typia-typeTags": [
                                {
                                    target: "string",
                                    name: 'Format<"ipv6">',
                                    kind: "format",
                                    value: "ipv6",
                                    validate:
                                        "/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test($input)",
                                    exclusive: true,
                                },
                            ],
                        },
                        date: {
                            description: "Date only.",
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "date",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "date",
                            "x-typia-typeTags": [
                                {
                                    target: "string",
                                    name: 'Format<"date">',
                                    kind: "format",
                                    value: "date",
                                    validate:
                                        "/^(\\d{4})-(\\d{2})-(\\d{2})$/.test($input)",
                                    exclusive: true,
                                },
                            ],
                        },
                        date_time: {
                            description: "Date and time.",
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "date-time",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "date-time",
                            "x-typia-typeTags": [
                                {
                                    target: "string",
                                    name: 'Format<"date-time">',
                                    kind: "format",
                                    value: "date-time",
                                    validate:
                                        "!isNaN(new Date($input).getTime())",
                                    exclusive: true,
                                },
                            ],
                        },
                        custom: {
                            description: "A custom format string.",
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "my-custom-format",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    nullable: false,
                    required: [
                        "uuid",
                        "email",
                        "url",
                        "ipv4",
                        "ipv6",
                        "date",
                        "date_time",
                        "custom",
                    ],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });