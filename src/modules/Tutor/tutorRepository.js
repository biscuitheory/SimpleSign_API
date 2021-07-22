class TutorRepository {
  constructor({ db }) {
    this.prisma = db.prisma;
  }

  async findAll() {
    try {
      const alltutors = await this.prisma.tutor.findMany();
      console.log({ alltutors });
      return alltutors;
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

  async createTutor(tutorEntity) {
    try {
      return await this.prisma.tutor.create({ data: tutorEntity });
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
    // console.log({classTutorEntity})
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

export default TutorRepository;
