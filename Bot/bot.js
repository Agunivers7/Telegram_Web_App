const { Telegraf } = require("telegraf");
const TOKEN = "6516533220:AAEoq0ohv4xAraIw7lB7BZVHKyUg85wo3mI";
const bot = new Telegraf(TOKEN);

const web_link = "https://apex-x-in-swapper.hf.space";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
