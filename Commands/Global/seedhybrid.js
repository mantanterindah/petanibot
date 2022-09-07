//const Discord = require("discord.js")
const thumbnail = 'https://cdn.discordapp.com/attachments/696643749043896350/1016989897657155624/unknown.png'
const imagebeanie = 'https://cdn.discordapp.com/attachments/502501525529034762/554355474846187525/beaniebranch.png'
const imageprettybeanie = 'https://cdn.discordapp.com/attachments/502501525529034762/554355653594841088/prettybeaniebranch.png'
const imagewarriorbeanie = 'https://cdn.discordapp.com/attachments/502501525529034762/554355632216604673/warbeaniebranch.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("seed_hybrid_branch") // The name of the slash command
    .setDescription("Beanie / Pretty Beanie / Warrior Beanie"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed1 = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Warrior Momo to Influental Warrior Momo / Male Dryard / Fly Male Dryard')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(imagebeanie)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nSeaweed\nBell\nAsh\nTransparent Mace\nCrystalline Staff\nHat of Quickness\nViridian Hat'}
      )

    const embed2 = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('King Momo to MTG / Male Dryard')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(imageprettybeanie)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nSeaweed\nBell\nAsh\nTransparent Mace\nCrystalline Staff\nHat of Quickness\nViridian Hat'}
      )

    const embed3 = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Pretty Momo to Beautyfull Momo / Male Dryard')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(imagewarriorbeanie)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nSeaweed\nBell\nAsh\nTransparent Mace\nCrystalline Staff\nHat of Quickness\nViridian Hat'}
      )



    return interaction.reply({
    embeds: [embed1, embed2, embed3]
   });
  }
}
