import axios from "../Config/Axios";
export async function getAllProducts() {
  return axios.get("/products");
}
export async function getByIdProducts(id) {
  return axios.get("/products/" + id);
}
