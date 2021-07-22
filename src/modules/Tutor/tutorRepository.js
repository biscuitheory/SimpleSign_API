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
}

export default TutorRepository;
