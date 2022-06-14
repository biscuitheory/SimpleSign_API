class UserController {
  constructor({ userService, jwtService }) {
    this.userService = userService;
    this.jwt = jwtService;
    //this.jwtService = jwtService;
  }

  getAllUsers = async ({ res, next }) => {
    try {
      let users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  };

  registerUser = async (req, res, next) => {
    try {
      const user = await this.userService.registerUser({ ...req.body });
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };

  loginAdmin = async (req, res, next) => {
    try {
      const user = await this.userService.loginAdmin({ ...req.body });
      const token = await this.jwt.generateToken({
        id: user.id,
        role: user.role,
      });
      res.cookie('auth-cookie', token, { expires: false, httpOnly: true });
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };

  loginStudent = async (req, res, next) => {
    try {
      const student = await this.userService.loginStudent({ ...req.body });
      //console.log("jwt", this.jwt)
      const token = await this.jwt.generateToken({ id: student.id });
      res.cookie('auth-cookie', token, { expires: false, httpOnly: true });
      res.status(200).json(student);
    } catch (err) {
      next(err);
    }
  };

  me = async (req, res, next) => {
    try {
      console.log('req me :', req.currentUserId);
      const user = await this.userService.me(req.currentUserId);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
