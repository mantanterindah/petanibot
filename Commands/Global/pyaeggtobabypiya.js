//const Discord = require("discord.js")
const thumbnail = 'https://cdn.discordapp.com/attachments/502501525529034762/558331883344232469/piyaeggtobaby.png'
const image = 'https://cdn.discordapp.com/attachments/502501525529034762/558331910749814787/piyaeggtobaby2.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("piya_stage1") // The name of the slash command
    .setDescription("Piya Stage 1"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Piya Egg to Baby Piya')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(image)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nHatching Stone\nGeranium\nLarge Geranium\nSap\nMilk\nBabys Pacifier\nSoy Milk\nEgg\nChicken Feather\nMadams Feather\nOxygen\nMothers Heart\nMotherly Love\nMotherly Devotion\nFathers Excuse\nFathers Good Old Days\nPiyas Unfertilized Egg\nVolcanic Rock\nForging Rock'}
      )
    return interaction.reply({
    embeds: [embed]
   });
  }
}
