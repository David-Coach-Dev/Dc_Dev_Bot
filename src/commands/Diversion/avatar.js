const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
const config = require("../../Config/config.json");

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
        .setColor(config.defaultSucceedColor)
        .setTitle(client.languages.__('avatar.title'))
        .setDescription(
          client.languages.__mf('avatar.objective', { username: user.username })
        )
        .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
        .setFooter({
          text: client.languages.__mf('avatar.footer', {
            username: interaction.user.username,
          }),
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        })
        .setTimestamp();
      return interaction.reply({ embeds: [embed] });
    } else {
      const embed = new EmbedBuilder()
        .setColor(config.defaultErrorColor)
        .setTitle(client.languages.__('avatar.title'))
        .setDescription(
          client.languages.__mf('avatar.objective', {
            username: interaction.user.username,
          })
        )
        .setImage(
          interaction.user.displayAvatarURL({ dynamic: true, size: 4096 })
        )
        .setFooter({
          text: client.languages.__mf('avatar.footer', {
            username: interaction.user.username,
          }),
          iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
        })
        .setTimestamp();
      return interaction.reply({ embeds: [embed] });
    }
  },
};
