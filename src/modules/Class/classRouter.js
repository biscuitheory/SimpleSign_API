class ClassRouter {
  constructor({ router, classController }) {
    this.router = router;
    this.initializeRoutes({ classController });
    return this.router;
  }

  initializeRoutes({ classController }) {
    this.router
      .route('/classes')
      .get(classController.getAll)
      .post(classController.registerClass);
  }
}

export default ClassRouter;
