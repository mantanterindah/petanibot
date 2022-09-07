const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bird_stage4_eagle") // The name of the slash command
    .setDescription("Eagle to Thunder Birds / Phoenix / Fly Phoenix"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Eagle to Thunder Birds/Phoenix')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554649386249093121/eageltothunderbird.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554754475479269376/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nAvas Wings\nSnake Skin\nGold Carp\nHatchlings Scale\nCrustaceans Bone\nChicken Costume(H)\nFlamberge\nGolden Bowie\nCrimson Bastard\nRuby\nRed Fire\nSunlight Shield\nChicken Costume(T)'});

    return interaction.reply({
    embeds: [embed]
   });
  }
}