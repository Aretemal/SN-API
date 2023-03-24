import ProfileSerializers from '../../serializers/ProfileSerializers.js';

describe('ProfileSerializer :', () => {
  describe('getInfoAuthorizedUser :', () => {
    test('should return info about user', () => {
      const links = 'http://localhost:5000/api/profile/user';
      const user = {
        id: 1,
        login: 'Artem',
        firstName: 'aaaa',
        lastName: 'bbbb',
        email: '111@11.1',
      };

      const data = ProfileSerializers.profileSerialize(user, links, 'ObjectUser', 1);

      expect(data).toMatchSnapshot();
    });
  });

  describe('updateStatus :', () => {
    test('should return new status', () => {
      const links = 'http://localhost:5000/api/profile/status';
      const status = { status: 'Hello world' };

      const data = ProfileSerializers.profileSerialize(status, links, 'NewStatus', 1);

      expect(data).toMatchSnapshot();
    });
  });

  describe('getStatus :', () => {
    test('should return status', () => {
      const links = 'http://localhost:5000/api/profile/status/1';
      const statusWithId = { id: 1, status: 'Hello world' };

      const data = ProfileSerializers.userSerialize(statusWithId, links, 'Status', statusWithId.id);

      expect(data).toMatchSnapshot();
    });
  });
});
