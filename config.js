const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SUPUN-MD=qZ0iFCZC#DHnA2O6UAzlJx-UZcsxLcKe4cfB3Iv3A7UlwyWUP9ns', //add your session id
MONGODB: process.env.MONGODB || "mongodb+srv://Dinuka:#2005Dinux@cluster0.ywgh7.mongodb.net/", //add your mongodb url
 URL : process.env.BOT_MENU_LINKS || 'https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg',
MAX_SIZE: 500
};

