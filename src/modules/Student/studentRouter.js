class StudentRouter {
  constructor({ router, auth, studentController }) {
    this.router = router;
    this.initializeRoutes({ auth, studentController });
    return this.router;
  }

  initializeRoutes({ auth, studentController }) {
    this.router
      .route('/students')
      .get(studentController.getAllStudents)
      .post(auth.isAdmin, studentController.registerStudent);

    // this.router.route('/students/login').post(userController.loginStudents);
  }
}

export default StudentRouter;
