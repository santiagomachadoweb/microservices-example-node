const UsersRepository = require("../repositories/usersRepository");
const repo = new UsersRepository();

exports.getUsers = async (req, res) => {
  const users = await repo.findAll();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  const id = await repo.create({ name, email });
  res.json({ id });
};
