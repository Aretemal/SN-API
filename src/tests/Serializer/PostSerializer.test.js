import { matchersWithOptions } from 'jest-json-schema';
import PostSerializer from '../../serializers/PostSerializer.js';
import PostsSerializer from '../../serializers/PostsSerializer.js';
import schema from './schema.json';

expect.extend(matchersWithOptions({
  verbose: true,
}));

describe('PostSerializer :', () => {
  describe('create :', () => {
    test('should return post', () => {
      const post = {
        id: 3,
        authorId: 2,
        content: 'Hello',
      };

      const serializer = new PostSerializer(post);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });

  describe('getAll :', () => {
    test('should return array posts', () => {
      const posts = [{
        id: 2,
        authorId: 2,
        content: 'Hello',
      },
      {
        id: 1,
        authorId: 1,
        content: 'World',
      }];
      const serializer = new PostsSerializer(posts);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });

  describe('getOne :', () => {
    test('should return post', () => {
      const post = {
        id: 1,
        authorId: 2,
        content: 'Hello',
      };
      const serializer = new PostSerializer(post);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });
});
