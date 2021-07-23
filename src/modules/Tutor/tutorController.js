class TutorController {
  constructor({ tutorService }) {
    this.tutorService = tutorService;
  }

  getAll = async ({ res, next }) => {
    try {
      let tutors = await this.tutorService.getAll();
      res.status(200).json(tutors);
    } catch (err) {
      next(err);
    }
  };

  registerTutor = async (req, res, next) => {
    try {
      const tutor = await this.tutorService.registerTutor({ ...req.body });
      res.status(201).json(tutor);
    } catch (err) {
      next(err);
    }
  }

  registerClassTutor = async (req, res, next) => {
    try {
      const classTutor = await this.tutorService.registerClassTutor({ ...req.body });
      res.status(201).json(classTutor);
    } catch (err) {
      next(err);
    }
  }
}

export default TutorController;