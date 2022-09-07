//const embed = new EmbedBuilder()
const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("piya_stage4_cleric") // The name of the slash command
    .setDescription("Cleric Piya to Priest Piya / QOAC"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Cleric Piya Ke Priest/Super Piya/QOAC')
    .setColor('320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558335480890916885/clericpiya.png')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558335495596146690/clerictipriest.png')
    .setTimestamp()
    .addFields({name:'List Bahan', value:'4 Leaf Clover\nSoul of Holy Knight\nSoul of Great Mage\nSoul of Jester\nSoul of Swordsman\nSoul of Snow Princess\nSpirit of Cat\nSoul of Pirate\nFallen Spirit\nSoulless Sword\nGhosts Staff\nGhosts Sword\nGhosts Shield'});

    return interaction.reply({
    embeds: [embed]
   });
  }
}