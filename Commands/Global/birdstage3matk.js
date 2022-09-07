const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bird_stage3_fwe") // The name of the slash command
    .setDescription("FWE to Pair Love Bird / Crow / Owl / Eagle"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed1 = new EmbedBuilder()
    .setTitle('Feather Wings Egg to Pair Love Bird/Eagle')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554648228235313173/fwetopairlove.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554753970418090032/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nAvas Wings\nMotherly Love\nMotherly Devotion\nMothers Heart\nFathers Excuse\nFathers Good Old Days\nMans Romance\nMans Senility\nJasons Heart\nCold Heart\nHeart of Golem'});


  const embed2 = new EmbedBuilder()
    .setTitle('Feather Wings Egg to Crow')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554648270786396162/fwetocrow.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554753970418090032/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nAvas Wings\nMark of Wind\nCrows Feather\nNecklace from Crow\nGold\nPlatinum\nSilver\nGold Dust\nMithril\nCeramic\nTitanium\nHeavy Metal\nGolemium\nCrystal\nIce Crystal\nMoonstone\nSolarstone\nShiny Thread\nRuby\nDiamond\nIlluminating Crystal\nCrystal of Star\nHeart of Wind'});


  const embed3 = new EmbedBuilder()
    .setTitle('Feather Wings Egg to Owl')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/554648248262983701/fwetoowl.png')
    .setColor('#320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/554753970418090032/unknown.png')
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nAvas Wings\nMark of Great Sage\nMagic Powder\nSoul of Great Mage\nMark of Mage\nConjurers Robe(T)\nConjurers Robe(B)\nConjurers Hat\nConjurers Shoes\nMagic Leather Clothes(T)\nMagic Leather Clothes(B)\nMagic Leather Shoes\nMagic Leather Hat\nEnchanted Cotton Shoes\nEnchanted Cotton Hat\nEnchanted Cotton Tunic(T)\nEnchanted Cotton Tunic(B)\nEyeball'});

    return interaction.reply({
    embeds: [embed1, embed2, embed3]
   });
  }
}