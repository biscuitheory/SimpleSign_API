class UserRouter {
  constructor({ router, userController }) {
    this.router = router;
    this.initializeRoutes({ userController });
    return this.router;
  }

  initializeRoutes({ userController }) {
    this.router.route('/users').get(userController.getAll);
  }
}

export default UserRouter;
