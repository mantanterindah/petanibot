//const Discord = require("discord.js")
const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("piya_stage4_mage") // The name of the slash command
    .setDescription("Mage Piya to GMP/Super Piya/ QOAC"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Mage Piya Ke GMP/Super Piya/QOAC')
    .setColor('320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558335365031657472/magepiya.png')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558335378512281603/magepiyatogmp.png')
    .setTimestamp()
    .addFields({name:'List Bahan', value:'4 Leaf Clover\nGrannys Staff\nMage Piyas Staff\nWagon Drivers Staff\nGhosts Staff\nMoo Moo Staff\nDarkwing Shard\nCool Guys Stick\nStaff of Neza\nReinas Staff\nSoul of Great Mage\nMark of Mage\nMagic Powder'});

    return interaction.reply({
    embeds: [embed]
   });
  }
}