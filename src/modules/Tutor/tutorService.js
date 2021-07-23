import TutorEntity from './tutorEntity';
import ClassTutorEntity from './classTutorEntity';
class TutorService {
  constructor({ tutorRepository, ApiError }) {
    this.tutorRepo = tutorRepository;
    this.apiError = ApiError;
  }

  async getAll() {
    const tutors = await this.tutorRepo.findAll();
    // console.log({tutors})
    return tutors.map((tutor) => new TutorEntity(tutor));
  }

  async registerTutor(tutorData) {
    // const { id, class_id } = tutorData;
    // console.log({id})
    const tutorEntity = new TutorEntity(tutorData);
    if (!tutorEntity.validateForm())
      throw new this.apiError(
        400,
        'User entity validation error: Missing parameters'
      );
    // console.log({tutorEntity})
    const newTutor = await this.tutorRepo.createTutor(tutorEntity);

    return new TutorEntity(newTutor);
  }

  async registerClassTutor(classTutorData) {
    const classTutorEntity = new ClassTutorEntity(classTutorData);
    if (!classTutorEntity.validateForm())
      throw new this.apiError(
        400,
        'User entity validation error: Missing parameters'
      );
    const newClassTutor = await this.tutorRepo.createClassTutor(
      classTutorEntity
    );
    return new ClassTutorEntity(newClassTutor);
  }
}

export default TutorService;
