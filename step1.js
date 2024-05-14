import { readFile } from "fs/promises";

const argv = process.argv;
//console.log("THE ARGUMENTS THAT WE HAVE", argv)

/** Print out contents of a file or throw an error
 * File must be passed as the 3rd arg
*/
async function cat(path) {
  let contents;
  try {
    //Only try one thing!
    contents = await readFile(path, "utf8");
  } catch (err) {

    console.log(`Error reading ${path}: \n ${err}`)

    process.exit(1);
  }

  console.log(contents);
}

await cat(argv[2]);

//If we wanted to have flags
//await cat(argv[argv.length - 1]);
