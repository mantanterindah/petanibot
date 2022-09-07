const thumbnail = 'https://cdn.discordapp.com/attachments/502501525529034762/554754342360449024/unknown.png'
const image = 'https://cdn.discordapp.com/attachments/502501525529034762/554649359468199947/crowtoibis.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bird_stage4_crow") // The name of the slash command
    .setDescription("Crow to Sacred Ibis / Phoenix"), // A short description about the slash command.
  
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle('Crow to Sacred Ibis/Phoenix')
    .setImage(image)
    .setColor('#320ddb')
    .setThumbnail(thumbnail)
    .setTimestamp()
    //.addField('', '')
    //.addField('', '')
    .addFields({name:'Bahan :', value:'4 Leaf Clover\nCrystalline Dagger\nCrystalline Sword\nTranslucent Great Sword\nTransparent Mace\nCrystalline Staff\nCrystalline Shield\nMagnum Blade\nTwo-handed Magnum\nMetronicker\nPlatinum Plunger\nFalchion\nSlayer\nDivine Blade\nRadiant Great Sword\nCleric Piyas Syringe\nSoul Dagger\nAqueous Mace\nStaff of Awakening'});

    return interaction.reply({
    embeds: [embed]
   });
  }
}