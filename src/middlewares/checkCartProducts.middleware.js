import { request, response } from "express";
import cartManager from "../cartManager.js";

export const checkCartProducts = async (req = request, res = response, next) => {
  try {

    const cart = await cartManager.getCarts();

    const productExists = cart.find((product) => product.pid === pid);
    
    if (productExists) return cart.quantity++,res.status(200).json({ status: "success", msg: `Producto agregado al carrito`});

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Parece que tenemos un problema... Disculpa las molestias" });
  }
};
