//const Discord = require("discord.js")
const thumbnailsmart = 'https://cdn.discordapp.com/attachments/502501525529034762/558332053419196427/babypiya.png'
const thumbnailhealtyt = 'https://cdn.discordapp.com/attachments/502501525529034762/558332053419196427/babypiya.png'
const imagesmart = 'https://cdn.discordapp.com/attachments/502501525529034762/558332075175051285/babypiyatosmart.png'
const imagehealty = 'https://cdn.discordapp.com/attachments/502501525529034762/558332099434774528/babypiyatohealty.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("piya_stage2") // The name of the slash command
    .setDescription("Baby Piya Branch"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed1 = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Baby Piya to Smart Piya / Silly Piya / EXO Piya')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnailsmart)
      .setImage(imagesmart)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nWit\nGlasses\nSwimming Goggles\nCrystal of Star\nIlluminating Crystal\nMark of Sage\nMark of Great Sage\nLiver\nSoy Milk\nWooden Staff\nMace\nCats Whiskers\nMark of Mage\nBell\nEyeball\nBlue Crystal'}
      )

    const embed2 = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Baby Piya to Healty Piya / Silly Piya / EXO Piya')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnailhealtyt)
      .setImage(imagehealty)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nMeat  Soy Milk\nPea\nKidney Bean\nRed Potion\nHigh-Red Potion\nMax-Red Potion\nBears Gall\nBronze Carp\nSilver Carp\nGold Carp\nWheat\nMilk\nMushroom\nLiver\n1000 Year-Old Mushroom\nEgg\nHerb\nBlue Potion\nHigh-Blue Potion\nMax-Blue Potion\n40oz Herbal Wine'}
      )


    return interaction.reply({
    embeds: [embed1, embed2]
   });
  }
}
