const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "6BdEyIrI#gkn6rr2dAb9WnhK3c2DEoZGfx2tRgcICtZJKmUO2mvM"
ALIVE_IMG:process.env.ALIVE_IMG || "",
ALIVE_MSG:process.evn.ALIVE_MSG || "HI",    
};
