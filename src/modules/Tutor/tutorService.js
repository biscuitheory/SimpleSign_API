import TutorEntity from './tutorEntity';
import ClassTutorEntity from './classTutorEntity';
class TutorService {
  constructor({ tutorRepository }) {
    this.tutorRepo = tutorRepository;
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
    // console.log({tutorEntity})
    const newTutor = await this.tutorRepo.createTutor(tutorEntity);

    return new TutorEntity(newTutor);
  }

  async registerClassTutor(classTutorData) {
    const classTutorEntity = new ClassTutorEntity(classTutorData);

    const newClassTutor = await this.tutorRepo.createClassTutor(
      classTutorEntity
    );
    return new ClassTutorEntity(newClassTutor);
  }
}

export default TutorService;
