class UserRouter {
  constructor({ router, auth, userController }) {
    this.router = router;
    this.initializeRoutes({ auth, userController });
    return this.router;
  }

  initializeRoutes({ auth, userController }) {
    this.router
      .route('/users')
      .get(auth.isAdmin, userController.getAllUsers)
      .post(auth.isAdmin, userController.registerUser);

    this.router
      .route('/admin/authenticate')
      .post(userController.loginAdmin);

    this.router.route('/login/student').post(userController.loginStudent);

    // this.router.route('/login/professor').post(userController.loginTutor);

    this.router.route('/me').get(auth.isAuth, userController.me);
  }
}

export default UserRouter;
