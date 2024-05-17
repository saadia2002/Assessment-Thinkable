const { createBlog, getBlogById, updateBlog, deleteBlog } = require('../services/blogService');
const BlogModel = require('../models/blogModel');

jest.mock('../models/blogModel');

describe('BlogService Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('createBlog should create a new blog', async () => {
    const mockBlogData = { titre: 'Test Blog', userID: '123', description: 'Test Description' };
    const mockNewBlog = { _id: '123', ...mockBlogData };
    BlogModel.create.mockResolvedValueOnce(mockNewBlog);

    const newBlog = await createBlog(mockBlogData);
    expect(newBlog).toEqual(mockNewBlog);
  });

  test('getBlogById should retrieve a blog by ID', async () => {
    const mockBlogId = '123';
    const mockBlog = { _id: mockBlogId, titre: 'Test Blog', userID: '123', description: 'Test Description' };
    BlogModel.findById.mockResolvedValueOnce(mockBlog);

    const blog = await getBlogById(mockBlogId);
    expect(blog).toEqual(mockBlog);
  });

  test('updateBlog should update an existing blog', async () => {
    const mockBlogId = '123';
    const mockUpdatedData = { titre: 'Updated Blog' };
    const mockUpdatedBlog = { _id: mockBlogId, titre: 'Updated Blog', userID: '123', description: 'Test Description' };
    BlogModel.findByIdAndUpdate.mockResolvedValueOnce(mockUpdatedBlog);

    const updatedBlog = await updateBlog(mockBlogId, mockUpdatedData);
    expect(updatedBlog).toEqual(mockUpdatedBlog);
  });

  test('deleteBlog should delete a blog by ID', async () => {
    const mockBlogId = '123';
    const mockDeletedBlog = { _id: mockBlogId, titre: 'Test Blog', userID: '123', description: 'Test Description' };
    BlogModel.findByIdAndDelete.mockResolvedValueOnce(mockDeletedBlog);

    const deletedBlog = await deleteBlog(mockBlogId);
    expect(deletedBlog).toEqual(mockDeletedBlog);
  });
});
