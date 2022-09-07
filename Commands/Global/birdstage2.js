const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bird_stage2") // The name of the slash command
    .setDescription("Bird Egg to BWE / FWE"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed1 = new EmbedBuilder()
    .setTitle('Legged to Bat Wings Egg')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554647274068901889/leggedtobwe.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554753878462038078/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nBats Wings\nBats Teeth\nVampires Canine\nTooth\nBlack Sap\nRotten Leaf\nPoisonous Claws\nMark of Vampire\nSteel\nStone\nRock\nIron Plate\nGasoline\nIron\nDevil Tail\nBat Guy Mask\nTarantulas Sunglasses\nForging Rock\nVolcanic Rock\nSeaweed\nMushroom Poison\nSpiders Poison\nGariels Feather'});


  const embed2 = new EmbedBuilder()
    .setTitle('Legged to Feather Wings Egg')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554647301520621599/leggedtofwe.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554753878462038078/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nAvas Wings\nFairys Powder\nMadams Feather\nCrows Feather\nChicken Feather\nRabbit Fur\nPiece of Cloth\nWhite Ash\nPlatinum\nMariels Feather\nSilver\nSnow Crystal\nPlatinum Antennae\nWhite Glove\nSilkworms Thread\nAdels Blessing\nTitanium\nFish Bone\nMithril\nMilk\nBowl\nFiber Optics'});
    return interaction.reply({
    embeds: [embed1, embed2]
   });
  }
}