const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Gj5i2BZD#PgPGO4neuv_GTiavQUHp0AIVGq-nHv_rtHahJ1elUp8",
ALIVE_IMG:process.env.ALIVE_IMG || "jkdkdk.jpg",
ALIVE_MSG:process.evn.ALIVE_MSG || "HI‼️",    
};
