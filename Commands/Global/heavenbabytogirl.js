//const Discord = require("discord.js")
const thumbnail = 'https://cdn.discordapp.com/attachments/502501525529034762/558336502602661918/baby.png'
const bahanbabytogirl = 'https://cdn.discordapp.com/attachments/502501525529034762/558336516779278337/babytogirl.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("heaven_baby_to_girl") // The name of the slash command
    .setDescription("Baby To Girl"), // A short description about the slash command.
  
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('Baby To Girl')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(bahanbabytogirl)
      .addFields(
      {name: 'bahan', value:'4 Leaf Clover\nFairys Powder\nMotherly Devotion\nMothers Heart\nMotherly Love\nFathers Good Old Days\nFathers Excuse\nPink Ribbon\nRed Ribbon\nOxygen\nAdels Blessing\nSoul of Snow Princess\nSnow Crystal\nBundle of Dreams\nCrystal of Star\nIlluminating Crystal\nMagic Powder\n5 Color String\nCrystal of Nixie\nBlue Crystal\nSolarstone\nMoonstone\nSilver\nGold'}
      )
    return interaction.reply({
    embeds: [embed]
   });
  }
}
