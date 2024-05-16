const { createUser, getUserById, updateUser, deleteUser } = require('../services/userService');
const UserModel = require('../models/userModel');

jest.mock('../models/userModel');

describe('UserService Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('createUser should create a new user', async () => {
    const mockUserData = { username: 'testuser', email: 'test@example.com', password: 'password' };
    const mockNewUser = { _id: '123', ...mockUserData };
    UserModel.create.mockResolvedValueOnce(mockNewUser);

    const newUser = await createUser(mockUserData);
    expect(newUser).toEqual(mockNewUser);
  });

  test('getUserById should retrieve a user by ID', async () => {
    const mockUserId = '123';
    const mockUser = { _id: mockUserId, username: 'testuser', email: 'test@example.com', password: 'password' };
    UserModel.findById.mockResolvedValueOnce(mockUser);

    const user = await getUserById(mockUserId);
    expect(user).toEqual(mockUser);
  });

  test('updateUser should update an existing user', async () => {
    const mockUserId = '123';
    const mockUpdatedData = { username: 'updateduser' };
    const mockUpdatedUser = { _id: mockUserId, username: 'updateduser', email: 'test@example.com', password: 'password' };
    UserModel.findByIdAndUpdate.mockResolvedValueOnce(mockUpdatedUser);

    const updatedUser = await updateUser(mockUserId, mockUpdatedData);
    expect(updatedUser).toEqual(mockUpdatedUser);
  });

  test('deleteUser should delete a user by ID', async () => {
    const mockUserId = '123';
    const mockDeletedUser = { _id: mockUserId, username: 'testuser', email: 'test@example.com', password: 'password' };
    UserModel.findByIdAndDelete.mockResolvedValueOnce(mockDeletedUser);

    const deletedUser = await deleteUser(mockUserId);
    expect(deletedUser).toEqual(mockDeletedUser);
  });
});