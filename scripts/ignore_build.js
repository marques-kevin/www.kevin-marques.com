process.exitCode = ["main"].includes(process.env.BRANCH)
  ? process.exit(1)
  : process.exit(0)
