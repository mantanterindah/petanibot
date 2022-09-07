//const Discord = require("discord.js")
const thumbnailwarmomo = 'https://cdn.discordapp.com/attachments/696643749043896350/1016986593397055518/unknown.png'
const thumbnailkingmomo = 'https://cdn.discordapp.com/attachments/696643749043896350/1016986593397055518/unknown.png'
const thumbnailprettymomo = 'https://cdn.discordapp.com/attachments/696643749043896350/1016986593397055518/unknown.png'
const imagewarmomo = 'https://cdn.discordapp.com/attachments/502501525529034762/554354111928336394/warmomobnrach.png'
const imagekingmomo = 'https://cdn.discordapp.com/attachments/502501525529034762/554353973998387230/kingmomobranch.png'
const imageprettymomo = 'https://cdn.discordapp.com/attachments/502501525529034762/554354007057891335/prettymomobranch.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("seed_atk_lastbranch") // The name of the slash command
    .setDescription("King Momo / Pretty Momo / Warrior Momo"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embedwarmomo = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Warrior Momo to Influental Warrior Momo / Male Dryard / Fly Male Dryard')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnailwarmomo)
      .setImage(imagewarmomo)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nCrystalline Sword\nTranslucent Great Sword\nCrystalline Dagger\n4 Leaf Clover\nRadish\nBland Water Kimchee\nBowl\nHat of Quickness\nShoes of Quickness\nSuit of Quickness(T)\nSuit of Quickness(B)\nBlue Ribbon\nBlue Dye'}
      )

    const embedkingmomo = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('King Momo to MTG / Male Dryard')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnailkingmomo)
      .setImage(imagekingmomo)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nCrystalline Sword\nTranslucent Great Sword\nCrystalline Dagger\n4 Leaf Clover\nRadish\nBland Water Kimchee\nBowl\nHat of Quickness\nShoes of Quickness\nSuit of Quickness(T)\nSuit of Quickness(B)\nBlue Ribbon\nBlue Dye'}
      )

    const embedprettymomo = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Pretty Momo to Beautyfull Momo / Male Dryard')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnailprettymomo)
      .setImage(imageprettymomo)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nCrystalline Sword\nTranslucent Great Sword\nCrystalline Dagger\n4 Leaf Clover\nRadish\nBland Water Kimchee\nBowl\nHat of Quickness\nShoes of Quickness\nSuit of Quickness(T)\nSuit of Quickness(B)\nBlue Ribbon\nBlue Dye'}
      )

    return interaction.reply({
    embeds: [embedwarmomo, embedprettymomo, embedkingmomo]
   });
  }
}
