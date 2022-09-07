//const Discord = require("discord.js")
const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("piya_stage3_healtypiya") // The name of the slash command
    .setDescription("Healty Piya to Knight Piya / Jester / Warrior / Chiken"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed1 = new EmbedBuilder()
    .setTitle('Healty Piya Ke Knight/Chiken/War Piya')
    .setColor('320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558333161592061962/healtypiya.png')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558333184543293453/healtypiyatoknight.png')
    .setTimestamp()
    .addFields({name:'List Bahan', value:'4 Leaf Clover\nIron Plate\nKnights Crest\nReally Hard Shell\nHard Shell\nSoul of Holy Knight\nPiyas Sword\nMithril\nCeramic\nTitanium\nHeavy Metal\nGolemium\nSword Hilt\nDamascus\nIron\nForging Rock\nBone\nArmor Pieces\nBronze\nStone\nRock\nFlame Stone\nVolcanic Rock'});
    //message.channel.send();

    const embed2 = new EmbedBuilder()
    .setTitle('Healty Piya Ke Jester/Chiken/War Piya')
    .setColor('320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558333161592061962/healtypiya.png')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558333214226251788/healtypiyatojester.png')
    .setTimestamp()
    .addFields({name:'List Bahan', value:'4 Leaf Clover\nDagger Hilt\nWit\nMark of Sage\nMark of Great Sage\nSages Staff\nChicken Feather\nChicken Costume(H)\nChicken Costume(T)\nChicken Costume(S)\nChicken Costume(B)\nStone\nDumb Knuckle\nRock'});
    //message.channel.send();



    return interaction.reply({
    embeds: [embed1, embed2]
   });
  }
}
