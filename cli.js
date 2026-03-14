import { Command } from "commander"
import { uploadFile } from "./src/upload.js"
import { fetchBlob } from "./src/fetch.js"

const program = new Command()

program
  .name("shelby-cli")
  .description("CLI tool for Shelby storage")
  .version("1.0.0")

program
  .command("upload")
  .argument("<file>")
  .description("Upload file to Shelby")
  .action(async (file) => {

    const result = await uploadFile(file)

    console.log("Uploaded blob:", result)

  })

program
  .command("fetch")
  .argument("<blobId>")
  .description("Fetch blob from Shelby")
  .action(async (blobId) => {

    const result = await fetchBlob(blobId)

    console.log(result)

  })

program.parse()
