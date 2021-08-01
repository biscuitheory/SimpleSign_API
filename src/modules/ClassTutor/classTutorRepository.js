class ClassTutorRepository {
  constructor({ db }) {
    this.prisma = db.prisma;
  }

  async findClassesByTutorId(tutorData) {
    const { tutor_id } = tutorData;
    try {
      await this.prisma.classTutor.findMany({
        where: {
          tutor_id,
        },
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

  async createClassTutor(classTutorEntity) {
    try {
      return await this.prisma.classTutor.create({ data: classTutorEntity });
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

export default ClassTutorRepository;
