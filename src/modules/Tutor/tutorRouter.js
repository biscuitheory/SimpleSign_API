class TutorRouter {
  constructor({ router, tutorController }) {
    this.router = router;
    this.initializeRoutes({ tutorController });
    return this.router;
  }

  initializeRoutes({ tutorController }) {
    this.router.route('/tutors').get(tutorController.getAll).post(tutorController.registerTutor);
    this.router.route('/classtutors').get(tutorController.getAll).post(tutorController.registerClassTutor);
  }
}

export default TutorRouter;
