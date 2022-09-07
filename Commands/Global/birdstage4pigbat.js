const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bird_stage4_pigbat") // The name of the slash command
    .setDescription("Pig Bat to Lucky Pig Bat / Dragon"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Pig Bat to Lucky Pig Bat/Dragon')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554648913127407616/pigbattolpb.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554754253898383360/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nMinotaurs Passion\nCow Skin\nRabbit Ears\nChicken Costume(B)\nBah Bahs Stick\nDragons Water Goggles\nSnake Skin\nWagon Drivers Staff\nWolf Skin\nFarmers Scythe\nLucky Card\nWhite Base\nWings of Incubus\nWooden Bludgeon'});

    return interaction.reply({
    embeds: [embed]
   });
  }
}