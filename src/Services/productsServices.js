import axios from "../Config/Axios";
export async function getAllProducts() {
  return axios.get("/products");
}
