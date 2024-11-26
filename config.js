//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "50940993901";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "2";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1MVHN2Z2Q2NndpNUY0RWc4bWN3QzNwMXdZTzZabE4zOGcwQnQxdW1uYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVByQTNmMEJIR2JEaGVMU1lNc2VmZFVmQ0NzNzdnMEZPalJhOVF1dUlFYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSEVnQ1hWeFc1dSswMHZUdHQ0OFJJUkJkQjE3YUNSakEvUmlvQ2pWbm1BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRGozZGI1WWtqYkd4cnA0ZUlscmxoV1lYeDdGT2wrcWpJSTJoZENTc3hJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCK3d5TE15U1BDQnB2U0t2dkJwSnJZRnpVT3dTNm85bTJlMExKa1ZQbFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBvcWRYSjJ1T0kwVFN0WEY2ZGtLRHZoY0dIa09EdTFRYWhCR0RIa2xKMDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEJ2VHp2YUp5VkJ1cldmT1FUQ2NvOUlWeGR1eDhSeFArQWtvRmU5ZDIxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXhnNE9sdXlIQVQvQ0RKTktHNTNUaHVvVmZDUHRUUm5MYW9QU0didTN4az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtDMGtjTS85cFdpRjByNk9GVWxSUzRBcy96dE9BaHQ2MEZjNlZtOHpSMnFDV3hObWFmTk54ZkVDUTlSc21jK3UrcFg2TXJHZzlPdGI5T3I0Y3dYaGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJJR1BwbXR5dUpYbkpuWjY2QS9WR3RIc2llRVJjSURtL2FNSkZ4Y2w0elhZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMamlqRkQ5d1NxR1dHSnlnX2s2NURRIiwicGhvbmVJZCI6ImI0ZmI4MGQwLWJkNDAtNDQ4NC05NTg2LTZmZWU4OTNhZDI2ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuMVAybU5TWlROa2xQUCtBQVU1d2kxaGYwZ1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTc1OE52YS9sTUNWOEN6RDBhUThOa2w0d3lBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldGSjRCQTVaIiwibWUiOnsiaWQiOiI1MDk0MDk5MzkwMToyNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZW48J2WhvCdlpfwnZab8J2WivCdlpPwnZaYIPCdlpHwnZaKIPCdlpvwnZaKzIHwnZaX8J2WjvCdlpnwnZaG8J2Wh/CdlpHwnZaKIPCdlorwnZaT8J2WiPCdlo3wnZaG8J2Wk/CdlpnwnZaK8J2WmvCdlpcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t2UHlZZ0dFS3ZubHJvR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFXbHBUcnBWMEFnZTZKSk9YRzNObkJrMFpPZ1R3V3cxdXNvRlJJSUlFMEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Iml5dSt5QmV5eXduUHNFaUJ3SUZPVVgxbVloMG50bmFtdTdReTY4RmFRSW0yVGlQeUlGeE5xLzlPSkI4RVY5NGNRRHlKRDQrTUYrRHlnZVJpNWtqdEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2Zm45WWxkWVJ0cFF3VFkxQU9WL1hZY2V5MUE4SG1OTjFueEQzMFRYcWFOWTd3WnpLa3cyM05CeU5DRXpGdU80NGN4cW1PdW1rOUZlcnhPMmZ2NGdpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQwOTkzOTAxOjI2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFscGFVNjZWZEFJSHVpU1RseHR6WndaTkdUb0U4RnNOYnJLQlVTQ0NCTkIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzI2MjEyNDB9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "Mr_Gojo",
  ownername: process.env.OWNER_NAME || "Vensoo_The_Dracula",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
