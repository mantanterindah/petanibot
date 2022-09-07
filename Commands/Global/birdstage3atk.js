const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bird_stage3_bwe") // The name of the slash command
    .setDescription("Bat Wings Egg to BabyBat / Blood Sucking Bat / Pig Bat / Salamander"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed1 = new EmbedBuilder()
    .setTitle('Bat Wings Egg To BabyBat/Salamander')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554647579678474240/bwetobabybat.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554753925077794837/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nBats Wings\nMotherly Love\nMotherly Devotion\nMothers Heart\nFathers Excuse\nFathers Good Old Days\nSoy Milk\nMilk\nGeranium\nLarge Geranium'});
  

  const embed2 = new EmbedBuilder()
    .setTitle('Bat Wings Egg to Blood Sucking/Salamander')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554647540310474762/bwetobloodsucking.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554753925077794837/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nBats Wings\nVampires Canine\nSharp Tooth\nPoisonous Claws\nMushroom Poison\nSpiders Poison\nMark of Sakiel\nCrystal of Sakiel\nMark of Vampire\nTattoo\nDullahans Tear\nTooth\nFish Bone\nIvory\nBats Teeth'});
    

  const embed3 = new EmbedBuilder()
    .setTitle('Bat Wings Egg to Pig Bat/Salamander')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554647604512686092/bwetopigbat.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554753925077794837/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nBats Wings\nFarmers Scythe\nMeat\nGolden Fur\nBlack Sap\nRed Potion\nHigh-Red Potion\nMax-Red Potion\nSoy Milk\nPea\nKidney Bean\nBears Gall\nBronze Carp\nSilver Carp\nGold Carp'});
    
    return interaction.reply({
    embeds: [embed1, embed2, embed3]
   });
  }
}