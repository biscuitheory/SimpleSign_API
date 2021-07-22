import UserEntity from './userEntity';

class UserService {
  constructor({ userRepository }) {
    this.userRepo = userRepository;
  }

  async getAllUsers() {
    const users = await this.userRepo.findAll();
    // console.log({users})
    return users.map((user) => new UserEntity(user));
  }

  async registerUser(userData) {
    const userEntity = new UserEntity(userData);
    if (!userEntity.validateUser())
      throw new Error('User entity validation error: Missing parameters');

    const newUser = await this.userRepo.createUser(userEntity);
    return new UserEntity(newUser);
  }
}

export default UserService;
