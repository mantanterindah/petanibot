const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("piya_stage4_warrior") // The name of the slash command
    .setDescription("Warrior Piya to Super Piya / KOAC / Fly KOAC"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('War Piya Ke Super Piya/KOAC/QOAC/F.KOAC/F.QOAC')
    .setColor('320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558335823167094794/warrpiya.png')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558335837146972170/warrpiyatosuper.png')
    .setTimestamp()
    .addFields({name:'List Bahan', value:'4 Leaf Clover\nMage Piyas Staff\nWarrior Piyas Sword\nPiyas Sword\nCleric Piyas Syringe\nCleric Piyas Hat\nMadams Feather\nSoul of Holy Knight\nSoul of Great Mage\nSoul of Jester\nSoul of Swordsman\nSoul of Snow Princess\nSpirit of Cat\nSoul of Pirate'});

    return interaction.reply({
    embeds: [embed]
   });
  }
}