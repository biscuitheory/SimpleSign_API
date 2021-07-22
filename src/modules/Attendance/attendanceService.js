import AttendanceEntity from './attendanceEntity';

class AttendanceService {
  constructor({ attendanceRepository }) {
    this.attendanceRepo = attendanceRepository;
  }

  async getAll() {
    const attendances = await this.attendanceRepo.findAll();
    // console.log({attendances})
    return attendances.map((attendance) => new AttendanceEntity(attendance));
  }
}

export default AttendanceService;