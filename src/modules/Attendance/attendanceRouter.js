class AttendanceRouter {
  constructor({ router, attendanceController }) {
    this.router = router;
    this.initializeRoutes({ attendanceController });
    return this.router;
  }

  initializeRoutes({ attendanceController }) {
    this.router.route('/attendances').get(attendanceController.getAll);
  }
}

export default AttendanceRouter;