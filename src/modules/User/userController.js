class UserController {
  constructor({ userService }) {
    this.userService = userService;
  }

  getAllUsers = async ({ res }) => {
    try {
      let users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  };

  registerUser = async (req, res) => {
    try {
      const user = await this.userService.registerUser({ ...req.body });
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  }
}

export default UserController;
