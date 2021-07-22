class UserRepository {
  constructor({ db, config }) {
    this.prisma = db.prisma;
    this.secret = config.jwt_secret;
    // console.log(this.prisma);
  }

  async findAll() {
    try {
      const kiki = await this.prisma.user.findMany();
      console.log('ki', kiki);
      return kiki;
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

export default UserRepository;
