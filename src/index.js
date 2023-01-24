require('https').createServer((req, res) => res.end('Dc Dev Bot En Linea...')).listen(3000);
const {
  Client,
  Intents,
  GatewayIntentBits,
  Collection,
} = require("discord.js");
const config = require("./config/config.json");
const { join } = require("path");
const { setInterval } = require("timers");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();
client.languages = require("i18n");
client.languages.configure({
  locales: ["es", "en"],
  directory: join(__dirname, "languages"),
  defaultLocale: "es",
  objectNotation: true,
  register: global,
  logWarnFn: function (msg) {
    console.warn("WARNING", msg);
  },
  logErrorFn: function (msg) {
    console.error("ERROR", msg);
  },
  missingKeyFn: function (locale, value) {
    return value;
  },
  mustacheConfig: {
    tags: ["{{", "}}"],
    disable: false,
  },
});
client.languages.setLocale("es");

setInterval(function () {
  updateStatus();
}, 60000);

async function updateStatus() {
  const guidNum = client.guilds.cache.size;
  const memberNum = client.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0);
  await client.user.setActivity(
    `${guidNum} servidores y ${memberNum} miembros`,
    { type: "LISTENING" }
  );
};
require("../src/handlers/events.js")(client);
require("../src/handlers/commands.js")(client);
client.login(config.token);
