import ClassTutorEntity from '../ClassTutor/classTutorEntity';

class ClassTutorService {
  constructor({ classTutorRepository, ApiError }) {
    this.classTutorRepo = classTutorRepository;
    this.apiError = ApiError;
  }

  async getAllClassesByTutor(tutorData) {
    const classes = await this.classTutorRepo.findClassesByTutorId(tutorData);
    return classes.map((tutorClasses) => new ClassTutorEntity(tutorClasses));
  }

  async registerClassTutor(classTutorData) {
    const classTutorEntity = new ClassTutorEntity(classTutorData);
    if (!classTutorEntity.validateForm())
      throw new this.apiError(
        400,
        'ClassTutor entity validation error: Missing parameters'
      );
    const newClassTutor = await this.classTutorRepo.createClassTutor(
      classTutorEntity
    );
    return new ClassTutorEntity(newClassTutor);
  }
}

export default ClassTutorService;
