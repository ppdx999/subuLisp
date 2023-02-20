import { createInterface } from "readline";

const reader = createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  console.log(line);
  process.stdout.write("> ");
});

reader.on("close", () => {
  console.log("bye!");
});

process.stdout.write("> ");
