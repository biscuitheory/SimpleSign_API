import ClassService from '../../modules/Class/classService';
import UserService from '../../modules/User/userService';
import TutorService from '../../modules/Tutor/tutorService';
import ClassEntity from '../../modules/Class/classEntity';
import UserEntity from '../../modules/User/userEntity';
import mockUserRepository from '../mocks/userRepository.mock';
import mockClassRepository from '../mocks/classRepository.mock';
import mockTutorRepository from '../mocks/tutorRepository.mock';
import { ApiError } from '../../helpers/error';
import { expect, it } from '@jest/globals';

const classService = new ClassService({
  classRepository: mockClassRepository,
  ApiError,
});

const userService = new UserService({
  userRepository: mockUserRepository,
  ApiError,
});

const tutorService = new TutorService({
  tutorRepository: mockTutorRepository,
  ApiError,
});

describe('Class USE-CASE: ', () => {
  describe('findById Classes use case: ', () => {
    it("Should throw an error if classData doesn't exist ", async () => {
      try {
        await classService.getClassById({ id: 14 });
      } catch (err) {
        expect(err.statusCode).toBe(400);
        expect(err.message).toBe("The requested class doesn't exist");
      }
    });
  });
});

describe('Assign a Class to a Tutor USE-CASE ', () => {
  describe('findById Classes use case: ', () => {
    it("Should throw an error if classData doesn't exist ", async () => {
      try {
        await classService.getClassById({ id: 14 });
      } catch (err) {
        expect(err.statusCode).toBe(400);
        expect(err.message).toBe("The requested class doesn't exist");
      }
    });
  });

  describe('findByFullname Tutor use case: ', () => {
    it('Should return a new instance of UserEntity with specified data: ', async () => {
      const userEntity = await userService.getUserByFullname({
        firstname: 'emiko',
        lastname: 'gakusei',
      });
      expect(userEntity instanceof UserEntity).toBe(true);
      expect(userEntity.id).toBe('4de37dc9-ea80-499d-847a-6bb5ea939d92');
      // try {
      //   await userService.getUserByFullname({
      //     firstname: 'ryosuke',
      //     lastname: 'gakusei',
      //   });
      // } catch (err) {
      //   expect(err.statusCode).toBe(400);
      //   expect(err.message).toBe('The requested user is not registered');
      // }
    });
    it('Should throw an error if the Tutor is not registered ', async () => {
      const userId = '4de37dc9-ea80-499d-847a-6bb5ea939d92';
      try {
        await tutorService.getTutorById(userId);
      } catch (err) {
        expect(err.statusCode).toBe(400);
        expect(err.message).toBe('The requested tutor is not registered');
      }
    });
  });
});
