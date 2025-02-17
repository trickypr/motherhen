import type {
  WritableConfigurationType
} from "./shared-types.js";

/** Craft a completely blank project configuration.  Other modules fill in the gaps. */
export default function buildBlank() : WritableConfigurationType
{
  return {
    vanilla: {
      tag: "",
    },

    integration: {
      path: "",
      mozconfig: "",
    }
  };
}
