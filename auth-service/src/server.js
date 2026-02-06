require('dotenv').config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const USER_SERVICE_URL = process.env.USER_SERVICE_URL;

app.post("/login", async (req, res) => {
  const { email } = req.body;

  try {
    const response = await axios.get(`${USER_SERVICE_URL}/users`);
    const users = response.data;

    const user = users.find(u => u.email === email);

    if (user) {
      res.json({ message: "Login OK", user });
    } else {
      res.status(401).json({ message: "User not found" });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Auth Service rodando na porta ${PORT}`);
});
