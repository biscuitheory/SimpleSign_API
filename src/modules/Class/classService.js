import ClassEntity from './classEntity';

class ClassService {
  constructor({ classRepository }) {
    this.classRepo = classRepository;
  }

  async getAll() {
    const studentClasses = await this.classRepo.findAll();
    // console.log({studentClasses})
    return studentClasses.map((studentClass) => new ClassEntity(studentClass));
  }
}

export default ClassService;