const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.clear()
  console.log(`${client.user.username} is ready!`);
  client.user.setSamsungActivity('com.HoYoverse.hkrpgoversea', 'START');
  // const getExtendURL = await RichPresence.getExternal(
    // client,
    // process.env.APPID,
    // 'https://files.catbox.moe/nk86rq.jpg' // Required if the image you use is not in Discord
  // );
  // const status = new RichPresence(client)
    // .setApplicationId(process.env.APPID)
    // .setType('WATCHING')
    // .setState('She Is Mine.')
    // .setName('Someone Who Will Be Mine.')
    // .setDetails('Ruan Mei')
    // .setStartTimestamp(Date.now())
    // .setAssetsLargeImage(getExtendURL[0].external_asset_path) // https://assets.ppy.sh/beatmaps/1550633/covers/list.jpg
  // client.user.setPresence({activities: [status], status: 'online'});
});

client.login(process.env.TOKEN);