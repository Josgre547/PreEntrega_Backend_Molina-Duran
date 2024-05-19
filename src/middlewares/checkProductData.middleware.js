import { request, response } from "express";
import productManager from "../productManager.js";

export const checkProductData = async (req = request, res = response, next) => {
  try {
    const { title, description, price, code, stock, category } = req.body;
    const newProduct = {
      title,
      description,
      price,
      code,
      stock,
      category,
    };

    const products = await productManager.getProducts();
    // Validar que no se repita el campo de code
    const productExists = products.find((p) => p.code === code);
    if (productExists) return res.status(400).json({ status: "Error", msg: `Vaya...  Parece que el prodcuto con el codigo: ${code} ya existe` });

    // Validamos que los campos sean obligatorios
    const checkData = Object.values(newProduct).includes(undefined);
    if (checkData) return res.status(400).json({ status: "Error", msg: "Todos los datos son obligatorios, por favor llenalos :)" });

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Parece que tenemos un problema... Disculpa las molestias" });
  }
};