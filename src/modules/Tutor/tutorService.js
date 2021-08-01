import TutorEntity from './tutorEntity';
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

  async getTutorById(tutorId) {
    const tutor = await this.tutorRepo.findById(tutorId);
    if (!tutor)
      throw new this.apiError(400, "The requested tutor is not registered");
    return new TutorEntity(tutor);
  }

  async registerTutor(tutorData) {
    // const { id, class_id } = tutorData;
    const tutorEntity = new TutorEntity(tutorData);
    if (!tutorEntity.validateForm())
      throw new this.apiError(
        400,
        'User entity validation error: Missing parameters'
      );
    const newTutor = await this.tutorRepo.createTutor(tutorEntity);

    return new TutorEntity(newTutor);
  }
}

export default TutorService;
