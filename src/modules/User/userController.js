class UserController {
  constructor({ userService }) {
    this.userService = userService;
  }

  getAll = async ({ res }) => {
    try {
      let users = await this.userService.getAll();
      res.status(200).json(users);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  };
}

export default UserController;
