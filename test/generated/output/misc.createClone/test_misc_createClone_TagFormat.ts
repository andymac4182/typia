import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TagFormat } from "../../../structures/TagFormat";

export const test_misc_clone_TagFormat = _test_misc_clone(
    "TagFormat",
)<TagFormat>(TagFormat)((input: TagFormat): typia.Resolved<TagFormat> => {
    const $is_uuid = (typia.misc.createClone as any).is_uuid;
    const $is_email = (typia.misc.createClone as any).is_email;
    const $is_url = (typia.misc.createClone as any).is_url;
    const $is_ipv4 = (typia.misc.createClone as any).is_ipv4;
    const $is_ipv6 = (typia.misc.createClone as any).is_ipv6;
    const $is_date = (typia.misc.createClone as any).is_date;
    const $is_datetime = (typia.misc.createClone as any).is_datetime;
    const $co0 = (input: any): any => ({
        uuid: input.uuid as any,
        email: input.email as any,
        url: input.url as any,
        ipv4: input.ipv4 as any,
        ipv6: input.ipv6 as any,
        date: input.date as any,
        date_time: input.date_time as any,
        custom: input.custom as any,
    });
    return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
});