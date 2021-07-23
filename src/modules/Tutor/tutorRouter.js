class TutorRouter {
  constructor({ router, auth, tutorController }) {
    this.router = router;
    this.initializeRoutes({ auth, tutorController });
    return this.router;
  }

  initializeRoutes({ auth, tutorController }) {
    this.router
      .route('/tutors')
      .get(tutorController.getAll)
      .post(auth.isAdmin, tutorController.registerTutor);
    this.router
      .route('/classtutors')
      .get(tutorController.getAll)
      .post(auth.isAdmin, tutorController.registerClassTutor);
  }
}

export default TutorRouter;
