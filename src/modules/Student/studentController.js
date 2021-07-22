class StudentController {
  constructor({ studentService }) {
    this.studentService = studentService;
  }

  getAll = async ({ res }) => {
    try {
      let students = await this.studentService.getAll();
      res.status(200).json(students);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  };
}

export default StudentController;