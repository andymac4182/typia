import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagType } from "../../../structures/TagType";

export const test_json_stringify_TagType = _test_json_stringify(
    "TagType",
    TagType.generate,
    (input: TagType): string => {
        const $number = (typia.json.createStringify as any).number;
        return `[${input
            .map(
                (elem: any) =>
                    `{"int":${$number((elem as any).int)},"uint":${$number(
                        (elem as any).uint,
                    )}}`,
            )
            .join(",")}]`;
    },
);
