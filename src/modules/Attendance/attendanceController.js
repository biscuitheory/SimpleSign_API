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
}

export default AttendanceController;
