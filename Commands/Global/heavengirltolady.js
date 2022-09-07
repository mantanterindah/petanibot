//const Discord = require("discord.js")
const thumbnail = 'https://cdn.discordapp.com/attachments/502501525529034762/558337026286682112/girl.png'
const image = 'https://cdn.discordapp.com/attachments/502501525529034762/558337038764736512/girltolady.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("heaven_girl_to_lady") // The name of the slash command
    .setDescription("Girl to Lady"), // A short description about the slash command.
  
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Girl To Lady')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(image)
      .addFields(
      {name: 'bahan', value:'4 Leaf Clover\nFairys Powder\nMotherly Devotion\nMothers Heart\nMotherly Love\nFathers Good Old Days\nFathers Excuse\nPink Ribbon\nRed Ribbon\nOxygen\nAdels Blessing\nSoul of Snow Princess\nSnow Crystal\nBundle of Dreams\nCrystal of Star\nIlluminating Crystal\nMagic Powder\n5 Color String\nCrystal of Nixie\nBlue Crystal\nSolarstone\nMoonstone\nSilver'}
      )
    return interaction.reply({
    embeds: [embed]
   });
  }
}
