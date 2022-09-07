const { Client, GatewayIntentBits , Collection} = require('discord.js');
const {REST} = require('@discordjs/rest');
const { SlashCommandBuilder, Routes } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();
const fs = require('fs')
const clientId = process.env.CLIENT_ID
const guildId = process.env.GUILD_ID

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on('ready', () => {
    const Games = [`Ragnarok Retro`, `Age of Ragnarok`, 'Dragon Nest Return']
    setInterval(() => { client.user.setActivity(`${Games[Math.floor(Math.random() * Games.length)] }`) }, 30000)
});

// Command Handling
client.commands = new Collection()

fs.readdirSync('./Events').forEach(dirs => {
  const EventFiles = fs.readdirSync(`./Events/${dirs}`)
    .filter(file =>
      file.endsWith('.js')
           )
    
  for (const file of EventFiles) {
    const EventName = file.split(".")[0]
    const Event = require(`./Events/${dirs}/${file}`)
    client.on(EventName, Event.bind(null, client))
  }
})

const commands = [];

fs.readdirSync('./Commands').forEach(dirs => {
  const CommandFiles = fs.readdirSync(`./Commands/${dirs}`)
    .filter(file =>
      file.endsWith('.js')
           )
    
  for (const file of CommandFiles) {
    const command = require(`./Commands/${dirs}/${file}`)
    commands.push(command.data.toJSON())
    client.commands.set(command.data.name, command)
  }
})

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
        body: commands
      },
    );
    
    console.log('Successfully reloaded application (/) commands.');
  
  } catch (error) {
    console.error(error);
  }
})();

  
  console.log(`Client ready`);

//});

client.login(process.env.TOKEN).catch(console.error)
