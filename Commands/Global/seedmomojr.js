//const Discord = require("discord.js")
const thumbnail = 'https://cdn.discordapp.com/attachments/696643749043896350/1016980546179579944/unknown.png'
const image = 'https://cdn.discordapp.com/attachments/502501525529034762/554352834808643615/SPOILER_momojrwarmomo.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("seed_momojr_branch") // The name of the slash command
    .setDescription("Momo Junior Branch Evo"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Momo Jr to King Momo / Pretty Momo / Warrior Momo!!! ')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(image)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nRadish\nMoo Moo Staff\nMans Romance\nMans Senility\nFathers Good Old Days\nFathers Excuse\nPharaohs Curse\nIce\nIce Crystal\nCold Heart\nBowl\nShark Shank\nCool Guys Helmet\nCool Guys Stick'}
      )
    return interaction.reply({
    embeds: [embed]
   });
  }
}
