//const Discord = require("discord.js")
const thumbnail = 'https://cdn.discordapp.com/attachments/696643749043896350/1016977312614469712/unknown.png'
const imagemomo = 'https://cdn.discordapp.com/attachments/502501525529034762/554352864412041273/SPOILER_budmomojr.png'
const imageflowerbud = 'https://cdn.discordapp.com/attachments/502501525529034762/554352838340378625/SPOILER_budflowerbud.png'
const imageshuck = 'https://cdn.discordapp.com/attachments/502501525529034762/554352850948456504/SPOILER_budshuck.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("seed_bud_evobranch") // The name of the slash command
    .setDescription("Bud Evo Branch"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embedmomo = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Bud to MomoJr')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(imagemomo)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clovern\nOxygen\nRadish\nPiece of Radish\nMoo Moo Staff\nFiber Optics\nVegetable Oil\nMoo Moos Headset\nStem of Radish\nCool Water Kimchee\nSap\nMagic Powder\nHeros Claw\nLarge Geranium\nPink Ribbon\nCrystal\nCotton Tunic(T)\nEnchanted Cotton Tunic(T)\nCotton Tunic(B)\nEnchanted Cotton Tunic(B)\nArmor Pieces\nMace'}
      )

    const embedflowerbud = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Bud to FlowerBud!!! ')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(imageflowerbud)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nOxygen\nFairys Powder\nSoul of Snow Princess\nSnow Crystal\nPink Ribbon\nRed Ribbon\nDyes\nBlue Dye\nAdels Blessing\nRed Dye\nSpore\nYeast\nSilver\nGold\nPiece of Cloth\n5 Color String\nCrystal of Star\nIlluminating Crystal\nMagic Powder\nCrystal of Nixie\nBlue Crystal\nSolarstone'}
      )

    const embedshuck = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Bud to Shuck')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(imageshuck)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nOxygen\nPea Shell\nPea\nKidney Bean\nSoy Milk\nRespect\nRotten Leaf\nScrubber\nWhite Glove\nLeaf\nHerb\nLog\nRod\nStem of Radish\nDumb Knuckle\nDyes\nSap\nVine\nMulberry\nLeaf\nMoonstone'}
      )


    return interaction.reply({
    embeds: [embedmomo , embedflowerbud , embedshuck]
   });
  }
}
