const express = require('express');
const app = express();
const { exec } = require('child_process');
const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.clear()
  console.log(`${client.user.username} is ready!`);
  const getExtendURL = await RichPresence.getExternal(
    client,
    process.env.APPID,
    'https://files.catbox.moe/nk86rq.jpg',
    'https://files.catbox.moe/kjkbdd.png'
  );
  const status = new RichPresence(client)
    .setApplicationId(process.env.APPID)
    .setType('PLAYING')
   // .setState('She Is Mine.')
    .setName('Honkai: Star Rail')
   // .setDetails('')
    .setStartTimestamp(Date.now() - 24 * 60 * 60 * 1000)
    .setAssetsLargeImage(getExtendURL[1].external_asset_path) // https://assets.ppy.sh/beatmaps/1550633/covers/list.jpg
  client.user.setPresence({activities: [status], status: 'online'});
});

app.get('/', (req, res) => {
  res.status(200).send('Hello, World');
})
app.listen(8000, () => {
  client.login("MTI2MTU3Mzg3MzkzNDAxMjQ1MA.G2W6qX.wZub9wgotl8r2gVj_Y-FS96_ikcmYCeOxPjil4");
  console.log(`✅ Server is running on port ${PORT}`);
})