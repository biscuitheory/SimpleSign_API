class AttendanceController {
  constructor({ attendanceService }) {
    this.attendanceService = attendanceService;
  }

  getAll = async ({ res }) => {
    try {
      let attendances = await this.attendanceService.getAll();
      res.status(200).json(attendances);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  };

  registerAttendance = async (req, res) => {
    try {
      const attendance = await this.attendanceService.registerAttendance({ ...req.body });
      res.status(201).json(attendance);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  }

  registerStudentAttendance = async (req, res) => {
    try {
      const studentAttendance = await this.attendanceService.registerStudentAttendance({ ...req.body });
      res.status(201).json(studentAttendance);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  }
}

export default AttendanceController;
