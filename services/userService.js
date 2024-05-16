const UserModel = require('../models/userModel');

async function createUser(userData) {
  try {
    const newUser = await UserModel.create(userData);
    return newUser;
  } catch (error) {
    throw new Error('Error creating user');
  }
}

async function getUserById(userId) {
  try {
    const user = await UserModel.findById(userId);
    return user;
  } catch (error) {
    throw new Error('Error fetching user');
  }
}

async function updateUser(userId, newData) {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, newData, { new: true });
    return updatedUser;
  } catch (error) {
    throw new Error('Error updating user');
  }
}

async function deleteUser(userId) {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    return deletedUser;
  } catch (error) {
    throw new Error('Error deleting user');
  }
}

module.exports = { createUser, getUserById, updateUser, deleteUser };