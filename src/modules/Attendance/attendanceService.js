import AttendanceEntity from './attendanceEntity';
import StudentAttendanceEntity from './StudentAttendanceEntity';

class AttendanceService {
  constructor({ attendanceRepository, ApiError }) {
    this.attendanceRepo = attendanceRepository;
    this.apiError = ApiError;
  }

  async getAll() {
    const attendances = await this.attendanceRepo.findAll();
    // console.log({attendances})
    return attendances.map((attendance) => new AttendanceEntity(attendance));
  }

  async registerAttendance(attendanceData) {
    console.log({ attendanceData });
    const attendanceEntity = new AttendanceEntity(attendanceData);
    if (!attendanceEntity.validateSession())
      throw new this.apiError(
        400,
        'User entity validation error: Missing parameters'
      );
    const newAttendance = await this.attendanceRepo.createAttendance(
      attendanceEntity
    );
    return new AttendanceEntity(newAttendance);
  }

  async registerStudentAttendance(studentAttendanceData) {
    console.log({ studentAttendanceData });
    const studentAttendanceEntity = new StudentAttendanceEntity(
      studentAttendanceData
    );
    if (!studentAttendanceEntity.validateAttendance())
      throw new this.apiError(
        400,
        'User entity validation error: Missing parameters'
      );
    const newStudentAttendance =
      await this.attendanceRepo.createStudentAttendance(
        studentAttendanceEntity
      );
    return new StudentAttendanceEntity(newStudentAttendance);
  }
}

export default AttendanceService;
