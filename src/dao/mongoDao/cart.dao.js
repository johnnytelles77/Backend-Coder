

import ProductModel from "../models/product.model.js";
import CartModel from "../models/cart.model.js";

class CartDao {
  async getById(id) {
    const cart = await CartModel.findById(id);
    return cart;
  }

  async create() {
    const cart = await CartModel.create({});
    return cart;
  }

  async addProductToCart(cid, pid) {
    const product = await ProductModel.findById(pid);
    if (!product) {return { product: false };
    }
    const cart = await CartModel.findById(cid)
    if (!cart) return { cart: false };

   const productInCart = await CartModel.findOneAndUpdate({_id: cid, "products.product": pid}, { $inc: {"products.$.quantity": 1}});
   if(!productInCart) {
    await CartModel.updateOne({_id: cid}, { $push: {products: {product: pid, quantity: 1}}});
   }
   const cartUpdate = await CartModel.findById(cid);
   return cartUpdate;
  }

  async deleteProductInCart(cid, pid) {
    const product = await ProductModel.findById(pid);
    if (!product) { return { product: false };
    }
    const cart = await CartModel.findOneAndUpdate({ _id: cid, "products.product": pid },{ $inc: {"products.$.quantity": -1}});
    if (!cart) { return { cart: false };
    }
    const cartUpdate = await CartModel.findById(cid)
    return cartUpdate;
  }

  async update(cid, data) {
    await CartModel.updateOne({_id: cid}, { $set: { products: []}});
    await CartModel.updateOne({_id: cid}, { $set: { products: data}});
    const cart = await CartModel.findById(cid);
    return cart;
  }

  async updateQuantityProductInCart(cid, pid, quantity) {
    const product = await ProductModel.findById(pid);
    if (!product) { return { product: false };
    };
    const cart = await CartModel.findOneAndUpdate({ _id: cid, "products.product": pid },{ $set: {"products.$.quantity": quantity }});
    if (!cart) { return { cart: false };
  }
  const cartUpdate = await CartModel.findById(cid)
  return cartUpdate;
  }

  async deleteAllProductsInCart(cid) {
    const cart = await CartModel.findByIdAndUpdate(cid, { $set: {products: []}});

    const cartUpdate = await CartModel.findById(cid)
    return cartUpdate;
  }
}

export default new CartDao();


