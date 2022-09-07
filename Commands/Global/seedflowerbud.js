//const Discord = require("discord.js")
const thumbnail = 'https://cdn.discordapp.com/attachments/696643749043896350/1016981726611910697/unknown.png'
const image = 'https://cdn.discordapp.com/attachments/502501525529034762/554354048325779463/flowerbudbranch.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("seed_flowerbud_branch") // The name of the slash command
    .setDescription("Flower Bud Branch Evo"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Flower Bud to Sun Flower / Rose')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(image)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nSnow Crystal\nGolden Fur\nGold\nSolarstone\nPlatinum\nVegetable Oil\nOgres Safety Helmet\nKnights Crest\nEgg\nPiyas Unfertilized Egg\nGold Carp\nDusk Armor(T)\nDusk Shield\nDusk Armor(B)\nDusk Boots\nDusk Helmet\nYellow Iron\nGolden Plunger\nBell\nCactus Flower'}
      )
    return interaction.reply({
    embeds: [embed]
   });
  }
}
