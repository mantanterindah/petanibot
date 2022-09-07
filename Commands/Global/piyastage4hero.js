const thumbnail = ''
const image = ''
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("piya_stage4_hero") // The name of the slash command
    .setDescription("Hero Piya to General Piya / KOAC / Fly KOAC"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Hero Piya Ke General/KOAC/QOAC/F.KOAC/F.QOAC')
    .setColor('320ddb')
    .setThumbnail('https://cdn.discordapp.com/attachments/502501525529034762/558336011458052096/heropiya.png')
    .setImage('https://cdn.discordapp.com/attachments/502501525529034762/558336025454444555/heropiyatogeneral.png')
    .setTimestamp()
    .addFields({name:'List Bahan', value:'4 Leaf Clover\nIlluminating Crystal\nShiny Thread\nFiber Optics\nHeart of Wind\nMark of Wind\nCrystal of Star\nAviators Armor(T)\nAviators Armor(B)\nAviators Boots\nWinged Shield\nBamboo Hat'});


    return interaction.reply({
    embeds: [embed]
   });
  }
}