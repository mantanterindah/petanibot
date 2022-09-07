const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bird_stage4_bloodsucking") // The name of the slash command
    .setDescription("Blood Sucking Bat to Count Bat / Dragon"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Blood Sucking Bat to Count Bat/Dragon')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554648939006263326/bloodysuckingtocountbat.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554754062709686312/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nGlare Blade\nEbullition\nEye Sore\nVampires Canine\nMark of Vampire\nFlamberge\nFlame Dagger\nCrimson Bastard\nHot Blood\nBoiling Blood\nBats Teeth\nBlue Blood of Reptile\nGolden Bowie'});

    return interaction.reply({
    embeds: [embed]
   });
  }
}