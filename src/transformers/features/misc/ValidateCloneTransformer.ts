import { MiscValidateCloneProgrammer } from "../../../programmers/misc/MiscValidateCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ValidateCloneTransformer {
    export const transform = GenericTransformer.scalar("validatClone")(
        (project) => (modulo) =>
            MiscValidateCloneProgrammer.write(project)(modulo),
    );
}
