// class UserDao {
//   constructor({ db, config }) {
//     this.prisma = db.prisma;
//     this.secret = config.jwt_secret;
//     console.log(this.secret)
//   }

//   async findAll() {
//     try {
//       const kiki = await this.prisma.user.findMany();
//       console.log('ki', kiki);
//       return kiki;
//     } catch {
//       (e) => {
//         throw e;
//       };
//     } finally {
//       async () => {
//         await prisma.$disconnect();
//       };
//     }
//   }
// }

// export default UserDao;

// import db from '../../config/database';

// const { prisma } = db;

// async function main() {
//   // ... you will write your Prisma Client queries here

//   const users = await prisma.user.findMany()

//   console.log({users})
// }

// main()
//   .catch(e => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

// import db from '../../config/database';

// const { prisma } = db;

// class UserDao {
//   constructor({ prisma }) {
//     this.prisma = prisma;
//   }
//   async findMany() {
//    return await this.prisma.user.findMany()

//   }
// }

// export default UserDao;
