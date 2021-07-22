import StudentEntity from './studentEntity';

class StudentService {
  constructor({ studentRepository }) {
    this.studentRepo = studentRepository;
  }

  async getAll() {
    const students = await this.studentRepo.findAll();
    // console.log({students})
    return students.map((student) => new StudentEntity(student));
  }

  async registerStudent(studentData) {
    const studentEntity = new StudentEntity(studentData);
    
    const newStudent = await this.studentRepo.createStudent(studentEntity);
    return new StudentEntity(newStudent);
  }
}

export default StudentService;
