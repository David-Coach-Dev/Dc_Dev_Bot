module.exports = {
  name: 'interactionCreate',
  async execute(client, interaction) {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
      await command.run(client, interaction);
    } catch (error) {
      console.error(error);
      return interaction.reply({ content: 'Hubo un error al ejecutar este comando!'});
    };
  }
};