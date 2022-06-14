import StudentEntity from './studentEntity';

class StudentService {
  constructor({ studentRepository, ApiError }) {
    this.studentRepo = studentRepository;
    this.apiError = ApiError;
  }

  async getAll() {
    const students = await this.studentRepo.findAll();
    // console.log({students})
    return students.map((student) => new StudentEntity(student));
  }

  async registerStudent(studentData) {
    const studentEntity = new StudentEntity(studentData);
    if (!studentEntity.validateForm())
      throw new this.apiError(
        400,
        'User entity validation error: Missing parameters'
      );

    const newStudent = await this.studentRepo.createStudent(studentEntity);
    return new StudentEntity(newStudent);
  }
}

export default StudentService;
