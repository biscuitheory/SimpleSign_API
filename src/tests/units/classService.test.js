import ClassService from '../../modules/Class/classService';
import UserService from '../../modules/User/userService';
import TutorService from '../../modules/Tutor/tutorService';
import ClassTutorService from '../../modules/ClassTutor/classTutorService';
import ClassTutorEntity from '../../modules/ClassTutor/classTutorEntity';
import UserEntity from '../../modules/User/userEntity';
import mockUserRepository from '../mocks/userRepository.mock';
import mockClassRepository from '../mocks/classRepository.mock';
import mockTutorRepository from '../mocks/tutorRepository.mock';
import mockClassTutorRepository from '../mocks/classTutorRepository.mock';
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

const classTutorService = new ClassTutorService({
  classTutorRepository: mockClassTutorRepository,
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

  describe('register classTutor use case : ', () => {
    it('Should throw an error if classTutorData is empty or null', async () => {
      try {
        await classTutorService.registerClassTutor({});
      } catch (err) {
        expect(err.statusCode).toBe(400);
        expect(err.message).toBe(
          'ClassTutor entity validation error: Missing parameters'
        );
      }
    });

    it('Should return a new instance of classTutorEntity : ', async () => {
      const classTutorEntity = await classTutorService.registerClassTutor({
        class_id: '2',
        tutor_id: '571cb226-78ac-439d-8632-484e4a5b0000',
      });
      expect(classTutorEntity instanceof ClassTutorEntity).toBe(true);
    });

    it('Should return an array of classTutor: ', async () => {
      const result = [
        { tutor_id: 'baed6531-3ea2-4f7c-8885-1220dfc2ab10', class_id: 2 },
        { tutor_id: 'baed6531-3ea2-4f7c-8885-1220dfc2ab10', class_id: 3 },
      ];
      const classes = await classTutorService.getAllClassesByTutor({
        tutor_id: 'baed6531-3ea2-4f7c-8885-1220dfc2ab10',
      });
      expect(classes).toEqual(result);
    });
  });
});
