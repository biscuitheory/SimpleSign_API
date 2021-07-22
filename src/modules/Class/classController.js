class ClassController {
  constructor({ classService }) {
    this.classService = classService;
  }

  getAll = async ({ res }) => {
    try {
      let studentClass = await this.classService.getAll();
      res.status(200).json(studentClass);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  };

  registerClass = async (req, res) => {
    try {
      const registeredClass = await this.classService.registerClass({ ...req.body });
      res.status(201).json(registeredClass);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  };
}

export default ClassController;