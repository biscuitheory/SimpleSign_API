class StudentRouter {
  constructor({ router, studentController }) {
    this.router = router;
    this.initializeRoutes({ studentController });
    return this.router;
  }

  initializeRoutes({ studentController }) {
    this.router
      .route('/students')
      .get(studentController.getAllStudents)
      .post(studentController.registerStudent);

    // this.router.route('/students/login').post(userController.loginStudents);
  }
}

export default StudentRouter;
