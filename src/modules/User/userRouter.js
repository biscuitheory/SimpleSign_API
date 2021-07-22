class UserRouter {
  constructor({ router, auth, userController }) {
    this.router = router;
    this.initializeRoutes({ auth, userController });
    return this.router;
  }

  initializeRoutes({ auth, userController }) {
    this.router
      .route('/users')
      .get(userController.getAllUsers)
      .post(userController.registerUser);
  }
}

export default UserRouter;
