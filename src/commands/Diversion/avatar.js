const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
const { join } = require("path");
require("dotenv").config({ path: join(__dirname, "../config/.env") });
module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Muestra el avatar")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("El usuario del que quieres ver el avatar")
    ),
  async run(client, interaction) {
    const user = interaction.options.getUser("user");
    if (user) {
      const embed = new EmbedBuilder()
        .setColor(process.env.DEFAULT_SUCCEED_COLOR)
        .setTitle(client.languages.__("avatar.title"))
        .setDescription(
          client.languages.__mf("avatar.objective", { username: user.username })
        )
        .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
        .setFooter({
          text: client.languages.__mf("avatar.footer", {
            username: interaction.user.username,
          }),
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        })
        .setTimestamp();
      return interaction.reply({ embeds: [embed] });
    } else {
      const embed = new EmbedBuilder()
        .setColor(process.env.DEFAULT_ERROR_COLOR)
        .setTitle(client.languages.__("avatar.title"))
        .setDescription(
          client.languages.__mf("avatar.objective", {
            username: interaction.user.username,
          })
        )
        .setImage(
          interaction.user.displayAvatarURL({ dynamic: true, size: 4096 })
        )
        .setFooter({
          text: client.languages.__mf("avatar.footer", {
            username: interaction.user.username,
          }),
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        })
        .setTimestamp();
      return interaction.reply({ embeds: [embed] });
    }
  },
};
