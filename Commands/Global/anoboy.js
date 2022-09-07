const { SlashCommandBuilder} = require("@discordjs/builders")
const { EmbedBuilder } = require('discord.js');
const request = require('request');
const cheerio = require('cheerio');
const url = 'https://62.182.83.93'

module.exports = {
  data: new SlashCommandBuilder()
    .setName("anoboy") // The name of the slash command
    .setDescription("AnoBoy Anime Feed"), // A short description about the slash command.
  
  async execute(interaction) {
      request.get(url, function(err, resp, body) {
        if (err) {
        console.log(err)
        }
        const $ = cheerio.load(body);
        //console.log(body)
        $(' div.home_index').each(function(index, element) {
              var judul8 = $(element).find('a:nth-child(8)').text();
              var url8 = $(element).find('a:nth-child(8)').attr('href');
              var thumnail8 = $(element).find('a:nth-child(8) > div > amp-img').attr('src');

              var judul9 = $(element).find('a:nth-child(9)').text();
              var url9 = $(element).find('a:nth-child(9)').attr('href');
              var thumnail9 = $(element).find('a:nth-child(9) > div > amp-img').attr('src');

              var judul10 = $(element).find('a:nth-child(10)').text();
              var url10 = $(element).find('a:nth-child(10)').attr('href');
              var thumnail10 = $(element).find('a:nth-child(10) > div > amp-img').attr('src');

              var judul11 = $(element).find('a:nth-child(11)').text();
              var url11 = $(element).find('a:nth-child(11)').attr('href');
              var thumnail11 = $(element).find('a:nth-child(11) > div > amp-img').attr('src');

              var judul12 = $(element).find('a:nth-child(12)').text();
              var url12 = $(element).find('a:nth-child(12)').attr('href');
              var thumnail12 = $(element).find('a:nth-child(12) > div > amp-img').attr('src');

              var judul13 = $(element).find('a:nth-child(13)').text();
              var url13 = $(element).find('a:nth-child(13)').attr('href');
              var thumnail13 = $(element).find('a:nth-child(13) > div > amp-img').attr('src');

              var judul14 = $(element).find('a:nth-child(14)').text();
              var url14 = $(element).find('a:nth-child(14)').attr('href');
              var thumnail14 = $(element).find('a:nth-child(14) > div > amp-img').attr('src');

              var judul15 = $(element).find('a:nth-child(15)').text();
              var url15 = $(element).find('a:nth-child(15)').attr('href');
              var thumnail15 = $(element).find('a:nth-child(15) > div > amp-img').attr('src');

              var judul16 = $(element).find('a:nth-child(16)').text();
              var url16 = $(element).find('a:nth-child(16)').attr('href');
              var thumnail16 = $(element).find('a:nth-child(16) > div > amp-img').attr('src');

              var judul17 = $(element).find('a:nth-child(17)').text();
              var url17 = $(element).find('a:nth-child(17)').attr('href');
              var thumnail17 = $(element).find('a:nth-child(17) > div > amp-img').attr('src');

              var judul18 = $(element).find('a:nth-child(18)').text();
              var url18 = $(element).find('a:nth-child(18)').attr('href');
              var thumnail18 = $(element).find('a:nth-child(18) > div > amp-img').attr('src');

              var judul19 = $(element).find('a:nth-child(19)').text();
              var url19 = $(element).find('a:nth-child(19)').attr('href');
              var thumnail19 = $(element).find('a:nth-child(19) > div > amp-img').attr('src');

              var judul20 = $(element).find('a:nth-child(20)').text();
              var url20 = $(element).find('a:nth-child(20)').attr('href');
              var thumnail20 = $(element).find('a:nth-child(20) > div > amp-img').attr('src');

              var judul21 = $(element).find('a:nth-child(21)').text();
              var url21 = $(element).find('a:nth-child(21)').attr('href');
              var thumnail21 = $(element).find('a:nth-child(21) > div > amp-img').attr('src');

              var judul22 = $(element).find('a:nth-child(22)').text();
              var url22 = $(element).find('a:nth-child(22)').attr('href');
              var thumnail22 = $(element).find('a:nth-child(22) > div > amp-img').attr('src');

    
    

              //console.log(judul8)
              //console.log(url8)
              //console.log(thumnail8)
                const embed8 = new EmbedBuilder()
                  .setTitle(judul8)
                  .setTimestamp()
                  .setURL(url8)
                  .setImage(thumnail8)


                const embed9 = new EmbedBuilder()
                  .setTitle(judul9)
                  .setTimestamp()
                  .setURL(url9)
                  .setImage(thumnail9)

                const embed10 = new EmbedBuilder()
                  .setTitle(judul10)
                  .setTimestamp()
                  .setURL(url10)
                  .setImage(thumnail10)

                const embed11 = new EmbedBuilder()
                  .setTitle(judul11)
                  .setTimestamp()
                  .setURL(url11)
                  .setImage(thumnail11)

                const embed12 = new EmbedBuilder()
                  .setTitle(judul12)
                  .setTimestamp()
                  .setURL(url12)
                  .setImage(thumnail12)

                const embed13 = new EmbedBuilder()
                  .setTitle(judul13)
                  .setTimestamp()
                  .setURL(url13)
                  .setImage(thumnail13)

                const embed14 = new EmbedBuilder()
                  .setTitle(judul14)
                  .setTimestamp()
                  .setURL(url14)
                  .setImage(thumnail14)

                const embed15 = new EmbedBuilder()
                  .setTitle(judul15)
                  .setTimestamp()
                  .setURL(url15)
                  .setImage(thumnail15)

                const embed16 = new EmbedBuilder()
                  .setTitle(judul16)
                  .setTimestamp()
                  .setURL(url16)
                  .setImage(thumnail16)

                const embed17 = new EmbedBuilder()
                  .setTitle(judul17)
                  .setTimestamp()
                  .setURL(url17)
                  .setImage(thumnail17)

                const embed18 = new EmbedBuilder()
                  .setTitle(judul8)
                  .setTimestamp()
                  .setURL(url8)
                  .setImage(thumnail8)

                const embed19 = new EmbedBuilder()
                  .setTitle(judul19)
                  .setTimestamp()
                  .setURL(url19)
                  .setImage(thumnail19)

                const embed20 = new EmbedBuilder()
                  .setTitle(judul20)
                  .setTimestamp()
                  .setURL(url20)
                  .setImage(thumnail20)

                const embed21 = new EmbedBuilder()
                  .setTitle(judul21)
                  .setTimestamp()
                  .setURL(url21)
                  .setImage(thumnail21)

                const embed22 = new EmbedBuilder()
                  .setTitle(judul22)
                  .setTimestamp()
                  .setURL(url22)
                  .setImage(thumnail22)

                  
                return interaction.reply({embeds: [embed8, embed9, embed10, embed11, embed12, embed13, embed14, embed15, embed16, embed17]});
                
            })

        })
  }
}
