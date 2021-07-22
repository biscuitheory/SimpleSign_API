class StudentRepository {
  constructor({ db }) {
    this.prisma = db.prisma;
  }

  async findAll() {
    try {
      const allstudents = await this.prisma.student.findMany();
      console.log({allstudents});
      return allstudents;
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

export default StudentRepository;