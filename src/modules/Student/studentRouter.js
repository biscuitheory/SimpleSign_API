class StudentRouter {
  constructor({ router, studentController }) {
    this.router = router;
    this.initializeRoutes({ studentController });
    return this.router;
  }

  initializeRoutes({ studentController }) {
    this.router.route('/students').get(studentController.getAll);
  }
}

export default StudentRouter;