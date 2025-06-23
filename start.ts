import { execSync } from "child_process";
import inquirer from "inquirer";

const START_MODES = {
  "Local API": "start:mode:api:local",
  "Production API": "start:mode:api:production",
  "Demo Mode": "start:mode:demo",
  "In-Memory Mode": "start:mode:in-memory",
  Default: "start",
};

async function selectStartMode() {
  const { mode } = await inquirer.prompt([
    {
      type: "list",
      name: "mode",
      message: "Select start mode:",
      choices: Object.keys(START_MODES),
    },
  ]);

  const command = `yarn ${START_MODES[mode]}`;
  console.log(`Starting in ${mode} mode...`);
  console.log(`Executing: ${command}`);

  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error("Failed to start application:", error);
    process.exit(1);
  }
}

selectStartMode().catch(console.error);
