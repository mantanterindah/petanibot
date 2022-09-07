//const Discord = require("discord.js")
const thumbnail = 'https://cdn.discordapp.com/attachments/502501525529034762/558337112760516608/lady.png'
const image = 'https://cdn.discordapp.com/attachments/502501525529034762/558337130900881409/ladytovalk.png'
const { SlashCommandBuilder} = require("@discordjs/builders")

const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("heaven_lady_to_valk") // The name of the slash command
    .setDescription("Lady to Valk"), // A short description about the slash command.
  
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('320ddb')
      .setTitle('Lady to Valk or Fly Valkyrie HOKI UP 10000% ')
      .setDescription('Try to Find of Indigrients')
      .setTimestamp()
      .setThumbnail(thumbnail)
      .setImage(image)
      .addFields(
      {name: 'Bahan', value:'4 Leaf Clover\nSoul of Holy Knight\nSoul of Jester\nSoul of Great Mage\nSoul of Swordsman\nBoots of Starlight\nArmor of Starlight(T)\nArmor of Starlight(B)\nHelmet of Starlight\nWagon Drivers Staff\nSoulless Sword\nOrnate Blade\nDefender\nShooting Star'}
      )
    return interaction.reply({
    embeds: [embed]
   });
  }
}
