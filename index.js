const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client();
const { exec, spawn } = require("child_process")
const express = require('express');
const app = express();

function handleGit() {
exec("git reset --hard HEAD && git pull")
const child = spawn(process.argv[0], process.argv.slice(1), {
    detached: true,
    stdio: 'inherit'
  });
  child.unref();
  process.exit();
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/push', async (req, res) => {
  res.send('Success Pulling');
  handleGit();
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(5000)

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
    // .setAssetsLargeText('Idle')
    // .setAssetsSmallImage('373370493127884800') // https://discord.com/api/v9/oauth2/applications/367827983903490050/assets
    // .setAssetsSmallText('click the circles')
    // .setPlatform('desktop')
     .addButton('Youtube', 'https://m.youtube.com/@Miyan0001');
  client.user.setPresence({activities: [status], status: 'online'});
});

client.login(process.env.TOKEN);