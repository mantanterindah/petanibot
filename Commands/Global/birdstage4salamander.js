const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bird_stage4_salamander") // The name of the slash command
    .setDescription("Salamander to Hacling / Dragon / Fly Dragon"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Salamander to Hacling/Dragon/Fly Dragon')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554648991308972062/salamandertohaclig.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554754297032736790/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nBlue Blaze\nSnake Skin\nCow Skin\nCarp\nSilk Carp\nPoisonous Claws\nPlatinum Antennae\nBats Wings\nWings of Incubus\nHorn of Incubus\nMermaids Bubble\nCrescent Moon\nDragons Water Goggles\nSwimming Goggles\nWings of Succubus'});

    return interaction.reply({
    embeds: [embed]
   });
  }
}