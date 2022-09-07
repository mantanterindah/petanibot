//const Discord = require("discord.js")
const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("piya_stage4_chiken") // The name of the slash command
    .setDescription("Chiken Evo Branch"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Chiken Ke Cranky/Super Piya/KOAC')
    .setColor('320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558334317382598699/chiken.png')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558334334235574303/chikenpiyatocranky.png')
    .setTimestamp()
    .addFields({name:'List Bahan', value:'4 Leaf Clover\nChicken Feather\nChicken Costume(H)\nChicken Costume(T)\nChicken Costume(S)\nChicken Costume(B)\nStone\nJasons Heart\nCold Heart\nHeart of Golem'});

    return interaction.reply({
    embeds: [embed]
   });
  }
}