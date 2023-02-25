import { createInterface } from "readline";

// READ
function read(str: string): any {
  // TODO
  return str;
}

// EVAL
function evalMal(ast: any, _env?: any): any {
  // TODO
  return ast;
}

// PRINT
function print(exp: any): string {
  // TODO
  return exp;
}

function rep(str: string): string {
  // TODO
  return print(evalMal(read(str)));
}

const reader = createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  console.log(rep(line));
});

process.stdout.write("> ");
