class ClassRepository {
  constructor({ db }) {
    this.prisma = db.prisma;
    // console.log(this.prisma);
  }

  async findAll() {
    try {
      const allClasses = await this.prisma.class.findMany();
      console.log('ki', allClasses);
      return allClasses;
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

  async createClass(classEntity) {
    try {
      return await this.prisma.class.create({
        data: classEntity,
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

  async findById(classId) {
    return await this.prisma.class.findUnique({
      where: {
        id: classId,
      },
    });
  }
}

export default ClassRepository;
