class StudentController {
  constructor({ studentService }) {
    this.studentService = studentService;
  }

  getAllStudents = async ({ res }) => {
    try {
      let students = await this.studentService.getAll();
      res.status(200).json(students);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  };

  registerStudent = async (req, res) => {
    try {
      const student = await this.studentService.registerStudent({ ...req.body });
      res.status(201).json(student);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  };
}

export default StudentController;
