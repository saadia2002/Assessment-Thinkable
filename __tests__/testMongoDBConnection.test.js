// __tests__/testMongoDBConnection.test.js
const { MongoMemoryServer } = require('mongodb-memory-server');
const testMongoDBConnection = require('../test/testMongoDBConnection');
const { connectDB } = require('../lib/mongodb');

jest.mock('../lib/mongodb');

describe('testMongoDBConnection', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    connectDB.mockResolvedValue({
      close: jest.fn(),
      db: () => ({
        collection: jest.fn(),
      }),
    });
  });

  afterAll(async () => {
    await mongoServer.stop();
  });

  test('should successfully connect to MongoDB', async () => {
    console.log = jest.fn(); // Mock console.log
    await testMongoDBConnection();
    expect(console.log).toHaveBeenCalledWith('MongoDB connection test successful');
  });

  test('should handle connection errors', async () => {
    const error = new Error('Connection failed');
    connectDB.mockRejectedValueOnce(error);
    console.error = jest.fn(); // Mock console.error
    await testMongoDBConnection();
    expect(console.error).toHaveBeenCalledWith('Failed to connect to MongoDB:', error);
  });
});
