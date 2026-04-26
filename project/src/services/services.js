import axios from "axios";

const API= "http://localhost:3000/products"

export const getAllProdcuts=()=> axios.get(API)

export const deleteProduct=(id)=>axios.delete(`${API}/${id}`)

export const getProduct=(id)=>axios.get(`${API}/${id}`)

export const postProduct=(product)=>axios.post(API,product)

export const putProduct = (id, product) => axios.put(`${API}/${id}`, product)