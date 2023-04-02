import { matchersWithOptions } from 'jest-json-schema';
import CollectionSerializer from '../../serializers/CollectionSerializer.js';
import MessageSerializer from '../../serializers/MessageSerializer.js';
import UserSerializer from '../../serializers/UserSerializer.js';
import UsersSerializer from '../../serializers/UsersSerializer.js';
import schema from './schema.json';

expect.extend(matchersWithOptions({
  verbose: true,
}));

describe('DialogSerializer :', () => {
  describe('sendMessage :', () => {
    test('should return created message', () => {
      const message = {
        senderId: 1,
        recipientId: 2,
        message: 'Hello',
      };

      const serializer = new MessageSerializer(message);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });

  describe('getAllMessage :', () => {
    test('should return array with messages', () => {
      const messages = [{
        senderId: 1,
        recipientId: 2,
        message: 'Hello',
      },
      {
        senderId: 2,
        recipientId: 3,
        message: 'Hel1lo',
      }];

      const serializer = new CollectionSerializer(messages, MessageSerializer);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });

  describe('getAllInterlocutors :', () => {
    test('should return array of users', () => {
      const users = [{
        userId: 3,
        login: 'dsdsd',
        firstName: 'assaaa',
        lastName: 'bbsbb',
        email: '111s@11.1',
        status: '1s',
        ava: null,
      },
      {
        userId: 1,
        login: 'Artem',
        firstName: 'aaaa',
        lastName: 'bbbb',
        email: '111@11.1',
        status: '1',
        ava: null,
      }];

      const serializer = new CollectionSerializer(users, UserSerializer);
      const data = serializer.serialize();

      expect(data).toMatchSnapshot();
      expect(data).toMatchSchema(schema);
    });
  });
});
