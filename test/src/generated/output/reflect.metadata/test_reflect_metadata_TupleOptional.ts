import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { TupleOptional } from "../../../structures/TupleOptional";

export const test_reflect_metadata_TupleOptional = _test_reflect_metadata(
  "TupleOptional",
)(
  (typia.reflect.metadata as any).from({
    metadatas: [
      {
        any: false,
        required: true,
        optional: false,
        nullable: false,
        functional: false,
        atomics: [],
        constants: [],
        templates: [],
        escaped: null,
        rest: null,
        arrays: [
          {
            name: "TupleOptional",
            tags: [],
          },
        ],
        tuples: [],
        objects: [],
        aliases: [],
        natives: [],
        sets: [],
        maps: [],
      },
    ],
    components: {
      objects: [],
      aliases: [],
      arrays: [
        {
          name: "TupleOptional",
          value: {
            any: false,
            required: true,
            optional: false,
            nullable: false,
            functional: false,
            atomics: [],
            constants: [],
            templates: [],
            escaped: null,
            rest: null,
            arrays: [],
            tuples: [
              {
                name: "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                tags: [],
              },
            ],
            objects: [],
            aliases: [],
            natives: [],
            sets: [],
            maps: [],
          },
          nullables: [false],
          recursive: false,
          index: null,
        },
      ],
      tuples: [
        {
          name: "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
          index: null,
          elements: [
            {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "number",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "boolean",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            {
              any: false,
              required: false,
              optional: true,
              nullable: true,
              functional: false,
              atomics: [
                {
                  type: "number",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            {
              any: false,
              required: false,
              optional: true,
              nullable: true,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
          ],
          recursive: false,
          nullables: [false],
        },
      ],
    },
  }),
);
