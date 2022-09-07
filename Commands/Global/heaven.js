//const Discord = require("discord.js")
const telorbaby = 'https://cdn.discordapp.com/attachments/502501525529034762/558336353306279946/heavenegg.png'
const bahantelorbaby = 'https://cdn.discordapp.com/attachments/502501525529034762/558336419471294475/heaveneggtobaby.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("heavenegg_to_baby") // The name of the slash command
    .setDescription("heaven egg to baby"), // A short description about the slash command.
  
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('Heaven Egg to Baby')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(telorbaby)
      .setImage(bahantelorbaby)
      .addFields(
      {name: 'bahan', value:'4 Leaf Clover\nHatching Stone\nGeranium\nLarge Geranium\nMilk\nBabys Pacifier\nSoy Milk\nMotherly Devotion\nMothers Heart\nMotherly Love\nFathers Good Old Days\nFathers Excuse\nPiece of Cloth\nFairys Powder\nMagic Powder'}
      )
    return interaction.reply({
    embeds: [embed]
   });
  }
}
