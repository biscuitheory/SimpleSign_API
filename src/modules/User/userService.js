import UserEntity from './userEntity';

class UserService {
  constructor({ userRepository }) {
    this.userRepo = userRepository;
  }

  async getAllUsers() {
    const users = await this.userRepo.findAll();
    return users.map((user) => new UserEntity(user));
  }

  async registerUser(userData) {
    const userEntity = new UserEntity(userData);
    if (!userEntity.validateForm())
      throw new Error('User entity validation error: Missing parameters');

    const newUser = await this.userRepo.createUser(userEntity);
    return new UserEntity(newUser);
  }

  async loginUser(userData) {
    const userEntity = new UserEntity(userData);
    if (!userEntity.validateUser())
      throw new Error('User entity validation error: Missing parameters');
    const user = await this.userRepo.findByEmail(userEntity);
    if (!user) throw new Error('Account do not exist');

    const passwordMatch = await this.userRepo.compareHash(
      userEntity.password,
      user.password
    );
    if (!passwordMatch) throw new Error('Password do not match');

    return new UserEntity(user);
  }

  async loginAdmin(userData) {
    const userEntity = new UserEntity(userData);
    if (!userEntity.validateUser())
      throw new Error('User entity validation error: Missing parameters');
    const user = await this.userRepo.findByEmail(userEntity);
    if (!user) throw new Error('Account do not exist');

    if (user.role !== 'admin') throw new Error('User is not authorized');

    const passwordMatch = await this.userRepo.compareHash(
      userEntity.password,
      user.password
    );
    if (!passwordMatch) throw new Error('Password do not match');

    return new UserEntity(user);
  }

  async loginStudent(userData) {
    const userEntity = new UserEntity(userData);
    if (!userEntity.validateUser())
      throw new Error('User entity validation error: Missing parameters');
    const user = await this.userRepo.findByEmail(userEntity);
    if (!user) throw new Error('Account do not exist');

    const passwordMatch = await this.userRepo.compareHash(
      userEntity.password,
      user.password
    );
    if (!passwordMatch) throw new Error('Password do not match');

    return new UserEntity(user);
  }

  async me(userId) {
    const user = await this.userRepo.findById(userId);
    if (!user) throw new Error('Account do not exist');
    return new UserEntity(user);
  }
}

export default UserService;
