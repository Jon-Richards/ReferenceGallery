"use strict";

const {
  chain,
  externalSchematic,
} = require("@angular-devkit/schematics");
const { updateWorkspace } = require("@schematics/angular/utility/workspace");

function viewSchematic(options) {
  const folderName = options.name.startsWith("@")
    ? options.name.slice(1)
    : options.name;

  const applicationOptions = {
    name: options.name,
    projectRoot: `./projects/views/${folderName}`,
    ssr: false,
    standalone: true,
    routing: false,
    style: "tailwind",
  };

  return chain([
    externalSchematic("@schematics/angular", "application", applicationOptions),
    updateWorkspace((workspace) => {
      const project = workspace.projects.get(options.name);
      if (!project) {
        throw new Error(`Could not find generated project "${options.name}".`);
      }

      const build = project.targets.get("build");
      if (!build) {
        throw new Error(`Could not find the build target for "${options.name}".`);
      }

      const production = build.configurations?.production;
      if (!production) {
        throw new Error(`Could not find the production configuration for "${options.name}".`);
      }

      production.outputPath =
        `../server/src/Website/wwwroot/bundles/views/${folderName}`;
    }),
  ]);
}

module.exports = viewSchematic;
module.exports.default = viewSchematic;
