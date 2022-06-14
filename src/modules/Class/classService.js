import ClassEntity from './classEntity';

class ClassService {
  constructor({ classRepository, ApiError }) {
    this.classRepo = classRepository;
    this.apiError = ApiError;
  }

  async getAll() {
    const studentClasses = await this.classRepo.findAll();
    // console.log({studentClasses})
    return studentClasses.map((studentClass) => new ClassEntity(studentClass));
  }

  async registerClass(classData) {
    const classEntity = new ClassEntity(classData);
    if (!classEntity.validateClass())
      throw new this.apiError(
        400,
        'Class entity validation error: Missing parameters'
      );
    const newClass = await this.classRepo.createClass(classEntity);
    return new ClassEntity(newClass);
  }

  async getClassById(classId) {
    const studentClass = await this.classRepo.findById(classId);
    if (!studentClass)
      throw new this.apiError(400, "The requested class doesn't exist");
    return new ClassEntity(studentClass);
  }
}

export default ClassService;
