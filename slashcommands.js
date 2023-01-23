const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientId, guildId, token } = require("./src/config/config.json");

const rest = new REST({ version: "10" }).setToken(token);

async function createSlash() {
  try {
    const commands = [];
    fs.readdirSync("./src/commands").forEach(async (category) => {
      const commandFiles = fs.readdirSync(`./src/commands/${category}`).filter((archivo) => archivo.endsWith(".js"))
      for (const archivo of commandFiles) {
        const command = require(`./src/commands/${category}/${archivo}`);
        console.log(`✔️  Comando : /${command.data.name} -> cargado.`);
        commands.push(command.data.toJSON());
      }
    });
    await rest.put(Routes.applicationCommands(clientId, guildId), {
      body: commands,
    });
    console.log("(/) commands en linea en Bot Dc Dev.");
  } catch (error) {
    console.error(error);
  }
}

createSlash();