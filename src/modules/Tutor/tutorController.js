class TutorController {
  constructor({ tutorService }) {
    this.tutorService = tutorService;
  }

  getAll = async ({ res }) => {
    try {
      let tutors = await this.tutorService.getAll();
      res.status(200).json(tutors);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  };

  registerTutor = async (req, res) => {
    try {
      const tutor = await this.tutorService.registerTutor({ ...req.body });
      res.status(201).json(tutor);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  }

  registerClassTutor = async (req, res) => {
    try {
      const classTutor = await this.tutorService.registerClassTutor({ ...req.body });
      res.status(201).json(classTutor);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  }
}

export default TutorController;