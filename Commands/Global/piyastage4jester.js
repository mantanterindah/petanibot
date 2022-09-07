const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("piya_stage4_jester") // The name of the slash command
    .setDescription("Jester Piya to Artist Piya / KOAC"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Jester Piya ke Artist/Super Piya/KOAC')
    .setColor('320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558334840773279754/jesterpiya.png')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558334858364059658/jesterpiyatoartist.png')
    .setTimestamp()
    .addFields({name:'List Bahan', value:'4 Leaf Clover\nSoul of Holy Knight\nSoul of Great Mage\nSoul of Jester\nSoul of Swordsman\nSoul of Snow Princess\nSpirit of Cat\nSoul of Pirate\nFallen Spirit\nSoulless Sword\nHeart of Wind\nMothers Heart\nMotherly Devotion'});

    return interaction.reply({
    embeds: [embed]
   });
  }
}