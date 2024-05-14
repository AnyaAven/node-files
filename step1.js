import { readFile } from "fs/promises";

const argv = process.argv;
//console.log("THE ARGUMENTS THAT WE HAVE", argv)

/** Print out contents of a file or throw an error
 * File must be passed as the 3rd arg
*/
async function cat(path) {
  try {
    let contents = await readFile(path, "utf8");
    console.log(contents);
  } catch (err) {

    console.log(`Error reading ${path}:`)
    console.log(err)

    process.exit(1);
  }
}

await cat(argv[2]);

//If we wanted to have flags
//await cat(argv[argv.length - 1]);
