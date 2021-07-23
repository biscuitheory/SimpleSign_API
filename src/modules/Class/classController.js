class ClassController {
  constructor({ classService }) {
    this.classService = classService;
  }

  getAll = async ({ res, next }) => {
    try {
      let studentClass = await this.classService.getAll();
      res.status(200).json(studentClass);
    } catch (err) {
      next();
    }
  };

  registerClass = async (req, res) => {
    try {
      const registeredClass = await this.classService.registerClass({
        ...req.body,
      });
      res.status(201).json(registeredClass);
    } catch (err) {
      next();
    }
  };
}

export default ClassController;
