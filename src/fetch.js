import axios from "axios"

const API = "https://testnet.shelby.serves/v1/blobs"

export async function fetchBlob(blobId) {

  const res = await axios.get(`${API}/${blobId}`)

  return res.data

}
