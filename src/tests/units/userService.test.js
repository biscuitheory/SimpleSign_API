// test de toute la couche métier User
import UserService from '../../modules/User/userService';
import UserEntity from '../../modules/User/userEntity';
import mockUserRepository from '../mocks/userRepository.mock';
import { ApiError } from '../../helpers/error';
import { expect, it } from '@jest/globals';

const userService = new UserService({
  userRepository: mockUserRepository,
  ApiError,
});

describe('User USE-CASE : ', () => {
  describe('findAll Users use case: ', () => {
    it('Should return an array of userEntity instance', async () => {
      const users = await userService.getAllUsers();
      expect(users[0] instanceof UserEntity).toBe(true);
      expect(users[4].firstname).toBe('erika');
    });
  });

  describe('register User use case: ', () => {
    it('Should throw an error if userData is empty or null', async () => {
      try {
        await userService.registerUser({});
      } catch (err) {
        expect(err.statusCode).toBe(400);
        expect(err.message).toBe(
          'User entity validation error: Missing parameters'
        );
      }
    });

    it('Should return a new instance of UserEntity with specified data', async () => {
      const userEntity = await userService.registerUser({
        firstname: 'jun',
        lastname: 'gakusei',
        email: 'jun@gakusei.com',
        password: 'azerty',
        role: 'scholar',
      });
      expect(userEntity instanceof UserEntity).toBe(true);
      expect(userEntity.email).toBe('jun@gakusei.com');
    });
  });
});
