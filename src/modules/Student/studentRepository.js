class StudentRepository {
  constructor({ db, bcrypt, uuidv4 }) {
    this.prisma = db.prisma;
    this.uuidv4 = uuidv4;
    this.bcrypt = bcrypt;
  }

  async findAll() {
    try {
      const allstudents = await this.prisma.student.findMany();
      console.log({ allstudents });
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

  async createStudent(studentEntity) {
    try {
      return await this.prisma.student.create({
        data: studentEntity
      });
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
