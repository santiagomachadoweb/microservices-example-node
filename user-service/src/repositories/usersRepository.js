const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/database.db");

db.run(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
)
`);

class UsersRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  create(user) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO users (name,email) VALUES (?,?)",
        [user.name, user.email],
        function (err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  }
}

module.exports = UsersRepository;
