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
}

export default TutorController;