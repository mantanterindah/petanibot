const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("piya_stage4_knight") // The name of the slash command
    .setDescription("Knight Piya to MSP / KOAC"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Knight Piya Ke MSP/Super Piya/KOAC')
    .setColor('320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558335663989063687/knightpiya.png')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558335678983831573/knightpiyatoswordmas.png')
    .setTimestamp()
    .addFields({name:'List Bahan', value:'4 Leaf Clover\nAzoth Blade\nCrystalline Sword\nGlare Blade\nSword of Ellen\nKris Blade\nFlamberge\nDeath Seeker\nFavonius\nOrnate Blade\nUltima\nFalchion\nShark Shank\nGrizzly Cleaver\nDullahans Sword\nGhosts Sword\nSkeletons Sword\nSkeletons Dark Sword\nRabbits Cleaver'});

    return interaction.reply({
    embeds: [embed]
   });
  }
}