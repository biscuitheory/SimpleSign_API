import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

class mockUserRepository {
  constructor() {
    this.uuidv4 = uuidv4;
    this.bcrypt = bcrypt;
    // console.log(this.prisma)
    this.users = [
      {
        id: '4de37dc9-ea80-499d-847a-6bb5ea939d92',
        firstname: 'emiko',
        lastname: 'gakusei',
        email: 'emiko@gakusei.com',
        password:
          '$2a$10$kc8LEwfYC8AyrO5Bm9TRkey..fEK7IHHS.ZHc9MJdjvFz.turE1Yq',
        role: 'scholar',
      },
      {
        id: '2bf75b38-df89-43df-ba3c-09d62599a8bb',
        firstname: 'kimi',
        lastname: 'gakusei',
        email: 'kimi@gakusei.com',
        password:
          '$2a$10$kc8LEwfYC8AyrO5Bm9TRkey..fEK7IHHS.ZHc9MJdjvFz.turE1Yq',
        role: 'scholar',
      },
      {
        id: '1290cee7-53ef-4bc5-8c4b-3bc12d7726ac',
        firstname: 'ryosuke',
        lastname: 'gakusei',
        email: 'ryosuke@gakusei.com',
        password:
          '$2a$10$kc8LEwfYC8AyrO5Bm9TRkey..fEK7IHHS.ZHc9MJdjvFz.turE1Yq',
        role: 'scholar',
      },
      {
        id: '571cb226-78ac-439d-8632-484e4a5b0000',
        firstname: 'matthew',
        lastname: 'sensei',
        email: 'matthew@sensei.com',
        password:
          '$2a$10$kc8LEwfYC8AyrO5Bm9TRkey..fEK7IHHS.ZHc9MJdjvFz.turE1Yq',
        role: 'scholar',
      },
      {
        id: '948b8f95-94e8-4172-be79-e2b0e51d1dd0',
        firstname: 'erika',
        lastname: 'sensei',
        email: 'erika@sensei.com',
        password:
          '$2a$10$kc8LEwfYC8AyrO5Bm9TRkey..fEK7IHHS.ZHc9MJdjvFz.turE1Yq',
        role: 'scholar',
      },
      {
        id: 'baed6531-3ea2-4f7c-8885-1220dfc2ab10',
        firstname: 'kyoko',
        lastname: 'sensei',
        email: 'kyoko@sensei.com',
        password:
          '$2a$10$kc8LEwfYC8AyrO5Bm9TRkey..fEK7IHHS.ZHc9MJdjvFz.turE1Yq',
        role: 'scholar',
      },
      {
        id: '0dae624a-8b1d-4e96-9db1-c254f310189e',
        firstname: 'rosie',
        lastname: 'admin',
        email: 'rosie@admin.com',
        password:
          '$2a$10$kc8LEwfYC8AyrO5Bm9TRkey..fEK7IHHS.ZHc9MJdjvFz.turE1Yq',
        role: 'admin',
      },
    ];
  }

  async findAll() {
    return this.users;
  }

  async createUser(userEntity) {
    this.users.push(userEntity);
    return userEntity;
  }

  async findByEmail(userEntity) {
    const users = this.users.filter((user) => user.email === userEntity.email);
    return users[0];
  }

  async findById(userId) {
    const users = this.users.filter((user) => user.id === userId);
    return users[0];
  }

  async findByFullname(userFullname) {
    const { firstname, lastname } = userFullname;
    const user = this.users.filter(
      (user) => user.firstname === firstname && user.lastname === lastname
    );
    return user[0];
  }

  compareHash = async (password, hash) =>
    await this.bcrypt.compareSync(password, hash);
}

export default new mockUserRepository();
