const { Telegraf } = require('telegraf')

const TOKEN = "6961701382:AAErcV0hJQHErd-mRkPXf2Tsw0uSTA8nfD4";
const bot = new Telegraf(TOKEN)
const web_app_link = "https://telegram-mini-app-coral.vercel.app/"
bot.start((ctx) => ctx.reply('Welcome', {
    reply_markup: {
      keyboard: [[{text: "web app", web_app: {url: web_app_link}}]]
    },
}))
bot.launch();