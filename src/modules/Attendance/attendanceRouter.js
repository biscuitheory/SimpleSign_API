class AttendanceRouter {
  constructor({ router, auth, attendanceController }) {
    this.router = router;
    this.initializeRoutes({ auth, attendanceController });
    return this.router;
  }

  initializeRoutes({ auth, attendanceController }) {
    this.router
      .route('/attendances')
      .get(auth.isTutor, attendanceController.getAll)
      .post(auth.isTutor, attendanceController.registerAttendance);
    this.router
      .route('/student-attendances')
      .post(attendanceController.registerStudentAttendance);
  }
}

export default AttendanceRouter;
