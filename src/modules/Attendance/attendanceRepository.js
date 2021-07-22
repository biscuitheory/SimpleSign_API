class AttendanceRepository {
  constructor({ db }) {
    this.prisma = db.prisma;
  }

  async findAll() {
    try {
      const allAttendances = await this.prisma.attendance.findMany();
      console.log({allAttendances});
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
}

export default AttendanceRepository;