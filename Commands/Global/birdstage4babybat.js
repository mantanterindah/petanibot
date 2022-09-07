const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bird_stage4_babybat") // The name of the slash command
    .setDescription("Baby Bat to HBB / Dragon"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Baby Bat to HBB/Dragon')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554648962901213194/babybattohbb.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554754016400375818/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nFlamberge\nFlame Dagger\nCrimson Bastard\nHot Blood\nBoiling Blood\nMans Romance\nBlue Blood of Reptile\nBats Wings\nBats Teeth\nEye Sore\nVampires Canine\nGolden Bowie'});

    return interaction.reply({
    embeds: [embed]
   });
  }
}