//const Discord = require("discord.js")
const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("piya_stage3_exo") // The name of the slash command
    .setDescription("EXO to War Piya / Jester Piya / Knights Piya / Mage Piya"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed1 = new EmbedBuilder()
    .setTitle('Exo Piya Ke Mage/War/Hero Piya')
    .setColor('320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558333813424652320/exopiya.png')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558333851097890835/exopiyatomage.png')
    .setTimestamp()
    .addFields({name:'List Bahan', value:'4 Leaf Clover\nMark of Mage\nMagic Powder\nSoul of Great Mage\nConjurers Robe(T)\nConjurers Robe(B)\nConjurers Hat\nConjurers Shoes\nMagic Leather Clothes(T)\nMagic Leather Clothes(B)\nMagic Leather Shoes\nMagic Leather Hat\nEnchanted Cotton Shoes\nEnchanted Cotton Hat\nEnchanted Cotton Tunic(T)\nEnchanted Cotton Tunic(B)\nRod\nHat of Praise\nMark of Sage\nMage Piyas Staff\nMark of Great Sage'});
    //message.channel.send();

    const embed2 = new EmbedBuilder()
    .setTitle('Exo Piya Ke Cleric/War/Hero Piya')
    .setColor('320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558333813424652320/exopiya.png')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558333865417113610/exopiyatocleric.png')
    .setTimestamp()
    .addFields({name:'List Bahan', value:'4 Leaf Clover\nMark of Sage\nWit\nMark of Great Sage\nSages Staff\nCompression Bandage\nBandage\nCleric Piyas Syringe\nCleric Piyas Hat\nMace Handle\nCrystal of Dean\nCrystal of Vinagh\nCrystal of Hokma\nCrystal of Hesed\nCrystal of Keterre\nCrystal of Neza\nAdels Blessing\nMark of Vinagh\nMark of Dean\nMark of Neza\nMark of Hokma\nMark of Elios'});
    //message.channel.send();

    const embed3 = new EmbedBuilder()
    .setTitle('Exo Piya Ke Jester/War/Hero Piya')
    .setColor('320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558333813424652320/exopiya.png')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558333882194329600/exopiyatojester.png')
    .setTimestamp()
    .addFields({name:'List Bahan', value:'4 Leaf Clover\nDagger Hilt\nWit\nMark of Sage\nMark of Great Sage\nSages Staff\nChicken Feather\nChicken Costume(H)\nChicken Costume(T)\nChicken Costume(S)\nChicken Costume(B)\nStone\nDumb Knuckle\nRock'});
    //message.channel.send();


    const embed4 = new EmbedBuilder()
    .setTitle('Exo Piya Ke Knight/War/Hero Piya')
    .setColor('320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558333813424652320/exopiya.png')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558333895867629588/exopiyatoknight.png')
    .setTimestamp()
    .addFields({name:'List Bahan', value:'4 Leaf Clover\nIron Plate\nKnights Crest\nReally Hard Shell\nHard Shell\nSoul of Holy Knight\nPiyas Sword\nMithril\nCeramic\nTitanium\nHeavy Metal\nGolemium\nSword Hilt\nDamascus\nIron\nForging Rock\nBone\nArmor Pieces\nBronze\nStone\nRock\nFlame Stone\nVolcanic Rock'});
    //message.channel.send();

    return interaction.reply({
    embeds: [embed1, embed2, embed3, embed4]
   });
  }
}