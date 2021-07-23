import AttendanceEntity from './attendanceEntity';
import StudentAttendanceEntity from './StudentAttendanceEntity';

class AttendanceService {
  constructor({ attendanceRepository }) {
    this.attendanceRepo = attendanceRepository;
  }

  async getAll() {
    const attendances = await this.attendanceRepo.findAll();
    // console.log({attendances})
    return attendances.map((attendance) => new AttendanceEntity(attendance));
  }

  async registerAttendance(attendanceData) {
    console.log({attendanceData})
    const attendanceEntity = new AttendanceEntity(attendanceData);

    const newAttendance = await this.attendanceRepo.createAttendance(
      attendanceEntity
    );
    return new AttendanceEntity(newAttendance);
  }

  async registerStudentAttendance(studentAttendanceData) {
    console.log({studentAttendanceData})
    const studentAttendanceEntity = new StudentAttendanceEntity(studentAttendanceData);

    const newStudentAttendance = await this.attendanceRepo.createStudentAttendance(
      studentAttendanceEntity
    );
    return new StudentAttendanceEntity(newStudentAttendance);
  }
}

export default AttendanceService;