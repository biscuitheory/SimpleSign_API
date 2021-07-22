import UserEntity from './userEntity';

class UserService {
  constructor({ userRepository }) {
    this.userRepo = userRepository;
  }

  async getAll() {
    const users = await this.userRepo.findAll();
    // console.log({users})
    return users.map((user) => new UserEntity(user));
  }
}

export default UserService;
