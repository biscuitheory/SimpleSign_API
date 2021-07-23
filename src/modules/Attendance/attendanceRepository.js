class AttendanceRepository {
  constructor({ db }) {
    this.prisma = db.prisma;
  }

  async findAll() {
    try {
      const allAttendances = await this.prisma.attendance.findMany();
      return allAttendances;
    } catch {
      (e) => {
        throw e;
      };
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  }

  async createAttendance(attendanceEntity) {
    try {
      return await this.prisma.attendance.create({ data: attendanceEntity });
    } catch {
      (e) => {
        throw e;
      };
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  }

  async createStudentAttendance(studentAttendanceEntity) {
    try {
      return await this.prisma.studentAttendance.create({ data: studentAttendanceEntity });
    } catch {
      (e) => {
        throw e;
      };
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  }
}

export default AttendanceRepository;