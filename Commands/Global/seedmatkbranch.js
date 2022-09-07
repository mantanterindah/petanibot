//const Discord = require("discord.js")
const thumbnail = 'https://cdn.discordapp.com/attachments/696643749043896350/1016988713890357248/unknown.png'
const imagesunflower = 'https://cdn.discordapp.com/attachments/502501525529034762/554355613698883595/sunflowerbranch.png'
const imagerose = 'https://cdn.discordapp.com/attachments/502501525529034762/554355594232987679/rosebranch.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("seed_matk_lastbranch") // The name of the slash command
    .setDescription("Sunflower and Rose"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embedsunflower = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Sunflower ke Solar / Female Dryard')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(imagesunflower)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nWit\nStone\nTooth\nTransparent Mace\nCrystalline Staff\nSolar Hat\nSunflower Seed\nLight Panel'}
      )

    const embedrose = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Rose ke White Rose / Female Dryard / Fly Female Dryard')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(imagerose)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nLeaf\nGreen Wood\nLucky Card\nCactus Flower\nWit\nStone\nTooth\nTransparent Mace\nCrystalline Staff\nSolar Hat\nSunflower Seed\nLight Panel'}
      )


    return interaction.reply({
    embeds: [embedsunflower, embedrose]
   });
  }
}
