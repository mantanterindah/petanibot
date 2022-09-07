//const Discord = require("discord.js")
const thumbnail = 'https://cdn.discordapp.com/attachments/696643749043896350/1016982440704753734/unknown.png'
const image = 'https://cdn.discordapp.com/attachments/502501525529034762/554354068034945034/shuckbranch.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("seed_shuck_branch") // The name of the slash command
    .setDescription("Shuck Branch Evo"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Shuck to Beanie / Pretty Beanie / Warrior Beanie')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(image)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nPea Shell\nPea Shell\nPea\nKidney Bean\nSoy Milk\nRespect\nRotten Leaf\nScrubber\nWhite Glove\nLeaf\nHerb\nLog\nRod\nStem of Radish\nDumb Knuckle\nDyes\nSap\nVine\nMulberry Leaf'}
      )
    return interaction.reply({
    embeds: [embed]
   });
  }
}
