import { type Configuration } from "./tools/Configuration.js";

/**
 * @param config - the configuration to use.
 */
export default
async function whereIsMyProject(
  config: Configuration
) : Promise<void>
{
  console.log(`
Your Mozilla integration repository should be at:
${config.integration.path}

The upstream "cleanroom" repository should be at:
${config.vanilla.path}
`.trim());
  return Promise.resolve();
}
