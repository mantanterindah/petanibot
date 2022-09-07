const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bird_stage1") // The name of the slash command
    .setDescription("Bird Egg to Legged"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Bird Egg ke Legged')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554647175393574915/birdeggtolegged.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554753810338283540/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nHatching Stone\nGeranium\nLarge Geranium\nSap\nMilk\nBabys Pacifier\nMark of Wind\nAvas Wings\nMagic Powder\nMothers Heart\nMotherly Love\nMotherly Devotion\nFathers Excuse\nFathers Good Old Days\nCrows Feather\nChicken Feather\nMadams Feather\nWinged Shield\nBats Wings'});
    
    return interaction.reply({
    embeds: [embed]
   });
  }
}