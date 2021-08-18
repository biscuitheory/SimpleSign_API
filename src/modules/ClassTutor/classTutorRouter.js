class ClassTutorRouter {
  constructor({ router, auth, classTutorController }) {
    this.router = router;
    this.initializeRoutes({ auth, classTutorController });
    return this.router;
  }

  initializeRoutes({ auth, classTutorController }) {
    this.router.route('/kiki').get(classTutorController.getHome)
    this.router
      .route('/classtutors')
      .get(classTutorController.getAllClassesByTutor)
      .post(auth.isAdmin, classTutorController.registerClassTutor);
    this.router
      .route('/classes/tutor:id')
      .get(classTutorController.getAllClassesByTutor);
  }
}

export default ClassTutorRouter;
