const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bird_stage4_owl") // The name of the slash command
    .setDescription("Owl to Dr Owl / Phoenix"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Owl to Dr Owl/Phoenix')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554649317076500481/owltodrowl.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554754419951140876/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nBoots of Starlight\nArmor of Starlight(T)\nArmor of Starlight(B)\nHelmet of Starlight\nCrescent Moon\nLunar Shadow Helmet\nLunar Shadow Armor(T)\nLunar Shadow Armor(B)\nLunar Shadow Boots\nMoonstone\nShooting Star\nCrystal of Star'});

    return interaction.reply({
    embeds: [embed]
   });
  }
}