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

  async registerClass(classData) {
    const classEntity = new ClassEntity(classData);
    if (!classEntity.validateClass())
      throw new Error('Class entity validation error: Missing parameters');
    
    const newClass = await this.classRepo.createClass(classEntity);
    return new ClassEntity(newClass);
  }
}

export default ClassService;
