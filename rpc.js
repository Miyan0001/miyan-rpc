const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.clear()
  console.log(`${client.user.username} is ready!`);
  const getExtendURL = await RichPresence.getExternal(
    client,
    process.env.APPID,
    'https://files.catbox.moe/nk86rq.jpg' // Required if the image you use is not in Discord
  );
  const status = new RichPresence(client)
    .setApplicationId(process.env.APPID)
    .setType('WATCHING')
    // .setURL('https://www.youtube.com/watch?v=5icFcPkVzMg') // If you set a URL, it will automatically change to STREAMING type
    .setState('She Is Mine.')
    .setName('Someone Who Will Be Mine.')
    .setDetails('Ruan Mei')
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(getExtendURL[0].external_asset_path) // https://assets.ppy.sh/beatmaps/1550633/covers/list.jpg
    // .setAssetsLargeText('Online')
    // .setAssetsSmallImage('373370493127884800') // https://discord.com/api/v9/oauth2/applications/367827983903490050/assets
    // .setAssetsSmallText('click the circles')
    // .setPlatform('desktop')
    //.addButton('YOUTUBE', 'https://m.youtube.com/@Miyan0001');
    client.user.setActivity(status);
    client.user.setPresence({ status: "online" });
  //client.user.setPresence({activities: [status], status: 'online'});
});

client.login(process.env.TOKEN);