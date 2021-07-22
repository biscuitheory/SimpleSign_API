import TutorEntity from './tutorEntity';

class TutorService {
  constructor({ tutorRepository }) {
    this.tutorRepo = tutorRepository;
  }

  async getAll() {
    const tutors = await this.tutorRepo.findAll();
    // console.log({tutors})
    return tutors.map((tutor) => new TutorEntity(tutor));
  }
}

export default TutorService;
