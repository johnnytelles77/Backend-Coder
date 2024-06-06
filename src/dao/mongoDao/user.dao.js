import UserModel from '../models/user.model.js';

class UserService {
  constructor() {
    this.userModel = UserModel.getModel(); 
  }

  async getAll() {
    const users = await this.userModel.find();
    return users;
  }

  async getById(id) {
    const user = await this.userModel.findById(id);
    return user;
  }

  async getByEmail(email) {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async create(data) {
    const user = await this.userModel.create(data);
    return user;
  }

  async update(id, data) {
    await this.userModel.findByIdAndUpdate(id, data);
    const user = await this.userModel.findById(id);
    return user;
  }

  async deleteOne(id) {
    const user = await this.userModel.deleteOne({ _id: id });
    return user.deletedCount !== 0;
  }
}

export default new UserService();

