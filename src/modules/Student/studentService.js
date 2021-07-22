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
}

export default StudentService;