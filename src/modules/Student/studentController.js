class StudentController {
  constructor({ studentService }) {
    this.studentService = studentService;
  }

  getAllStudents = async ({ res, next }) => {
    try {
      let students = await this.studentService.getAll();
      res.status(200).json(students);
    } catch (err) {
      next();
    }
  };

  registerStudent = async (req, res, next) => {
    try {
      const student = await this.studentService.registerStudent({
        ...req.body,
      });
      res.status(201).json(student);
    } catch (err) {
      next();
    }
  };
}

export default StudentController;
