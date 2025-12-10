const options = {
  headers: {
    description: "Get headers from csv",
    usage: "headers [file]",
    required: ["file"],
    optional: [
      "--json",
      "--uppercase",
      "--lowercase",
      "--trim",
      "--print",
      "--output=<filename>",
    ],
  },
};

const commands = Object.entries(options);

const formatHelperHeader = (title, indent) => {
  const line = "-".repeat(title.length + 2);
  return `\n\t${title}:`;
};
const formatHelper = (key) => {
  const cmd = options[key];
  let str = `${formatHelperHeader("Usage")}: ${cmd?.usage}${formatHelperHeader(
    "Description"
  )} ${cmd?.description}${formatHelperHeader("Required")} ${cmd?.required.join(
    ", "
  )}${formatHelperHeader("Optional")}\n\t\t${cmd?.optional?.join("\n\t\t")}\n`;
  return str;
};

const help = `
Usage: cli <command> [options] [arguments]
Commands:
\t${formatHelper("headers")}
  
`;

const command = process.argv[2];
if (!command) {
  console.log(help);
  process.exit(0);
}

const optional = [];
const required = [];

for (let i = 3; i < process.argv.length; i++) {
  const arg = process.argv[i];
  if (arg.startsWith("--")) {
    optional.push(arg.slice(2));
  } else {
    required.push(arg);
  }
}

if (!options[command]) {
  console.log(`Unknown command: ${command}`);
  console.log(help);
  process.exit(1);
}
if (required.length < options[command].required.length) {
  console.log(`Missing required arguments for command: ${command}`);
  console.log(formatHelper(command));
  process.exit(1);
}

const fs = require("fs");
const path = require("path");

const runHeaders = (required, optional) => {
  const file = required[0];
  const filePath = path.resolve(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }
  let headers = fs.readFileSync(filePath, "utf-8").split("\n")[0].split(",");

  if (optional.includes("uppercase")) {
    headers = headers.map((h) => h.toUpperCase());
  }
  if (optional.includes("lowercase")) {
    headers = headers.map((h) => h.toLowerCase());
  }
  if (optional.includes("trim")) {
    headers = headers.map((h) => h.trim());
  }

  if (optional.includes("json")) {
    headers = JSON.stringify(headers, null, 2);
  } else {
    headers = headers.join(", ");
  }

  if (optional.includes("print")) {
    console.log(headers);
  }

  const outputOption = optional.find((opt) => opt.startsWith("output="));
  if (outputOption) {
    const outputFile = outputOption.split("=")[1];
    fs.writeFileSync(outputFile, headers, "utf-8");
    console.log(`Headers written to ${outputFile}`);
  }
};

if (command === "headers") {
  runHeaders(required, optional);
}
