import ProductModel from "../models/product.model.js";

class ProductService {
  async getAll(query, options) {
    const products = await ProductModel.paginate(query, options);
    return products;
  }

  async getById(id) {
    const product = await ProductModel.findById(id);
    return product;
  }

  async create(data) {
    const product = await ProductModel.create(data);
    return product;
  }

  async update(id, data) {
    await ProductModel.findByIdAndUpdate(id, data);
    const updatedProduct = await ProductModel.findById(id);
    return updatedProduct;
  }

  async deleteOne(id) {
    const product = await ProductModel.deleteOne({ _id: id });
    if (product.deletedCount === 0) return false;
    return true;
  }
}

export default new ProductService();

