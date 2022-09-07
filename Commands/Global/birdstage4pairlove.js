const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bird_stage4_pairlove") // The name of the slash command
    .setDescription("Pair Love Birds to Sweet Love Birds / Phoenix"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Pair Love Birds to Sweet Love Birds/Phoenix')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554649340589899779/pairlovetosweetlove.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554754383452176396/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nRabbits Cleaver\nFarmers Scythe\nRed Plunger\nBlue Plunger\nGolden Plunger\nPlatinum Plunger\nGrizzly Cleaver\nShark Shank\nGrannys Staff\nBowl\nLucky Card\nScrubber\nMotherly Love\nFathers Good Old Days\nCool Water Kimchee\nBland Water Kimchee'});
    return interaction.reply({
    embeds: [embed]
   });
  }
}