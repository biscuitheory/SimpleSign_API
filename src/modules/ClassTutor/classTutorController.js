class ClassTutorController {
  constructor({ classTutorService }) {
    this.classTutorService = classTutorService;
  }

  getHome = async ({ res }) => {
    res.status(200).json({ message: 'A wild kiwi appeared !' });
  };

  getAllClassesByTutor = async ({ res, next }) => {
    try {
      let classes = await this.classTutorService.getAllClassesByTutor(
        req.params.id
      );
      res.status(200).json(classes);
    } catch (err) {
      next(err);
    }
  };

  registerClassTutor = async (req, res, next) => {
    try {
      const classTutor = await this.classTutorService.registerClassTutor({
        ...req.body,
      });
      res.status(201).json(classTutor);
    } catch (err) {
      next(err);
    }
  };
}

export default ClassTutorController;
