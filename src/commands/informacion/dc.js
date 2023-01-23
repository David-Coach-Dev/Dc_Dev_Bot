const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
const config = require("../../config/config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dc")
    .setDescription("Portafolio de Dc Dev!"),
  async run(client, interaction) {
    const embed = new EmbedBuilder()
      .setColor(config.defaultErrorColor)
      .setTitle(client.languages.__("dc.title"))
      .setDescription(`${client.languages.__("dc.msn")}`)
      .setThumbnail("https://i.imgur.com/iBYouzb.png")
      .setImage("https://i.imgur.com/yysg2eN.png")
      .setFooter({
        text:
          client.languages.__mf("dc.footer", {
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
