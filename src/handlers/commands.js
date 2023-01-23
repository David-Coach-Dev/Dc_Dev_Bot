const fs = require("fs");
const categories = fs.readdirSync("./src/commands");

module.exports = (client) => {
  categories.forEach((category) => {
    fs.readdir(`./src/commands/${category}`, (err) => {
      if (err) console.error(err);
      const commands = fs.readdirSync(`./src/commands/${category}`).filter((archivo) => archivo.endsWith(".js"));
      for (const archivo of commands) {
        const command = require(`../commands/${category}/${archivo}`);
        client.commands.set(command.data.name, command);
      };
    });
  });
};
