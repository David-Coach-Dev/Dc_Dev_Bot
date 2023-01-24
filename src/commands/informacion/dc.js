const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
const { join } = require("path");
require("dotenv").config({ path: join(__dirname, "../config/.env") });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dc")
    .setDescription("Portafolio de Dc Dev!"),
  async run(client, interaction) {
    const embed = new EmbedBuilder()
      .setColor(process.env.DEFAULT_ERROR_COLOR)
      .setTitle(client.languages.__("dc.title"))
      .setDescription(`${client.languages.__("dc.msn")}`)
      .setThumbnail("https://i.imgur.com/iBYouzb.png")
      .setImage("https://i.imgur.com/yysg2eN.png")
      .setFooter({
        text: client.languages.__mf("dc.footer", {
          time: Date.now() - interaction.createdTimestamp,
          username: interaction.user.username,
        }),
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
      })
      .setTimestamp();
    return interaction.reply(
      { embeds: [embed] }
    );
  },
};
