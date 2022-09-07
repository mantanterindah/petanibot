//const Discord = require("discord.js")
const thumbnail = 'https://cdn.discordapp.com/attachments/696643749043896350/1016976293461512212/unknown.png'
const image = 'https://cdn.discordapp.com/attachments/502501525529034762/554352870573735939/SPOILER_seedbud.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("seed_to_bud") // The name of the slash command
    .setDescription("Seed To Bud"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Seed to Bud ')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(image)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clovern\nLeaf\nRespect\nOxygen\nHydrogen\nCarbon\nDyes\nSap\nGeranium\nLarge Geranium\nPea Shell\nPea\nKidney Bean\nSoy Milk\nHerb\nLog\nVegetable Oil\nStem of Radish\nMulberry Leaf\nWhite Glove\nRadish\nRotten\nLeaf \nStem of Radish'}
      )
    return interaction.reply({
    embeds: [embed]
   });
  }
}
