//const Discord = require("discord.js")
const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("piya_stage3_smartpiya") // The name of the slash command
    .setDescription("Smart Piya"), // A short description about the slash command.
  
  async execute(interaction, client) {
      const embed1 = new EmbedBuilder()
        .setTitle('Smart Piya Ke Jester/Chiken/War Piya')
        .setColor('320ddb')
        .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558332773769936916/smartpiya.png')
        .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558332793319456778/smartpiyatojester.png')
        .setTimestamp()
        .addFields({name:'List Bahan', value:'4 Leaf Clover\nDagger Hilt\nWit\nMark of Sage\nMark of Great Sage\nSages Staff\nChicken Feather  Chicken Costume(H)\nChicken Costume(T)\nChicken Costume(S)\nChicken Costume(B)\nStone\nDumb Knuckle\nRock'});
    
      const embed2 = new EmbedBuilder()
        .setTitle('Smart Piya Ke Mage/Chiken/War Piya')
        .setColor('320ddb')
        .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558332773769936916/smartpiya.png')
        .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558332801603338247/smartpiyatomage.png')
        .setTimestamp()
        .addFields({name:'List Bahan', value:'4 Leaf Clover\nMark of Great Sage\nMagic Powder\nSoul of Great Mage\nMark of Mage\nConjurers Robe(T)\nConjurers Robe(B)\nConjurers Hat\nConjurers Shoes\nMagic Leather Clothes(T)\nMagic Leather Clothes(B)\nMagic Leather Shoes\nMagic Leather Hat\nEnchanted Cotton Shoes\nEnchanted Cotton Hat\nEnchanted Cotton Tunic(T)\nEnchanted Cotton Tunic(B)\nRod\nHat of Praise\nMark of Sage\nMage Piyas Staff'});
    //message.channel.send();

      const embed3 = new EmbedBuilder()
        .setTitle('Smart Piya Ke Cleric/Chiken/War Piya')
        .setColor('320ddb')
        .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558332773769936916/smartpiya.png')
        .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558332821383413765/smartpiyatocleric.png')
        .setTimestamp()
        .addFields({name:'List Bahan', value:'4 Leaf Clover\nMark of Sage\nWit\nMark of Great Sage\nSages Staff\nCompression Bandage\nBandage\nCleric Piyas Syringe\nCleric Piyas Hat\nMace Handle\nCrystal of Dean\nCrystal of Vinagh\nCrystal of Hokma\nCrystal of Hesed\nCrystal of Keterre\nCrystal of Neza\nAdels Blessing\nMark of Vinagh\nMark of Dean\nMark of Neza\nMark of Hokma\nMark of Elios'});
    //message.channel.send();


    return interaction.reply({
    embeds: [embed1, embed2, embed3]
   });
  }
}
