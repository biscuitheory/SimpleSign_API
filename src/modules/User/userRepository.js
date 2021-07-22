class UserRepository {
  constructor({ db, bcrypt, uuidv4 }) {
    this.prisma = db.prisma;
    this.uuidv4 = uuidv4;
    this.bcrypt = bcrypt;
    // console.log(this.prisma)
  }

  async findAll() {
    try {
      const kiki = await this.prisma.user.findMany();
      // console.log('ki', kiki);
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

  async createUser(userEntity) {
    userEntity.id = this.uuidv4();
    const salt = this.bcrypt.genSaltSync(10);
    userEntity.password = this.bcrypt.hashSync(userEntity.password, salt);
    // console.log('useers', userEntity);
    try {
      return await this.prisma.user.create({ data: userEntity });
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
