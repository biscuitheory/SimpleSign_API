class AttendanceController {
  constructor({ attendanceService }) {
    this.attendanceService = attendanceService;
  }

  getAll = async ({ res, next }) => {
    try {
      let attendances = await this.attendanceService.getAll();
      res.status(200).json(attendances);
    } catch (err) {
      next();
    }
  };

  registerAttendance = async (req, res, next) => {
    try {
      const attendance = await this.attendanceService.registerAttendance({
        ...req.body,
      });
      res.status(201).json(attendance);
    } catch (err) {
      next(err);
    }
  };

  registerStudentAttendance = async (req, res, next) => {
    try {
      const studentAttendance =
        await this.attendanceService.registerStudentAttendance({ ...req.body });
      res.status(201).json(studentAttendance);
    } catch (err) {
      next();
    }
  };
}

export default AttendanceController;
