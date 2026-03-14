import axios from "axios"
import fs from "fs"

const API = "https://testnet.shelby.serves/v1/blobs"

export async function uploadFile(path) {

  const data = fs.readFileSync(path)

  const res = await axios.post(API, data, {

    headers: {
      "Content-Type": "application/octet-stream"
    }

  })

  return res.data

}
