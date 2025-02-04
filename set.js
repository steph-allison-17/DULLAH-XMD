const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA5VVXY+qSBD9L/2KsyKogMkkC4iCioriB272oYEGW6BBuhXxxv++YZzJTDb33p3lqdMUp05VnVP8ACTHFE1RDQY/QFHiK2SoObK6QGAAtEsUoRK0QAgZBANQjW5n7WTUU23tQnzlwlvWNTZc4URk4qurKzGm1uwut9tm9xU8WqC4+CkOfgM4ukxdLigLeB9lu3uyYTNOPzqjmyvsFpfxTjWtQNU0jhturVfwaBAhLjGJjeKIMlTCdIrqJcTl9+hz5kmbuyJ34DR5wddtdLhZkTt0nEyvDrld8vXdvdAgzjL5e/RNacbum91ZjeBIXZqHYHa5l7PC8p2zW7Wvwill3jwLdW5Pn/QpjgkKrRARhln97b7vbHuZkrtG6TBdT9uUm7TN6S1Z7vWdFwnZYS9Bh3O36ZTE3yPuHpPR+syPkOoEayItkqIqBLqulnlpLOEm0W/ZblLa8wXOvxJflh9aSf5P38cTPFtZu2N5Wt3Whr+odzF/1FebrD2/HqE69ix51tHjLWdW36Pvrcj8ukAnXp07tTa38a7e+amHlHXCxZyYePL0xAxpPT85n/Qhu5S/Y3mYOLqjVLg7PJERr2tiPU+FcBuMSxLonnjpVhZdjM3Z3jSmK2vkl6ldkao4SfAMlWMVBL3dNIsXyjUKGZYCb1vLnq6+vlWUoNoKwaDzaIESxZiyEjKck7c7XmkBGF7XKCgRe2svCHPp0B6P/FUadDcxfyXOyEg22rQqzOXaR4felHem7TM52/IraIGizANEKQpNTFle1jaiFMaIgsFfb5Nqii5RljM0wSEYgI7cFwVB5jt9/k/6R3WEjMKi+IMgBlogKvPMRmDAygtqgbd4UVU1Q1U1WRcFfaSK4lASmqqyZx4XZ4gymBVg0JFEua/0OhL/+LsFCLqxp2SaQsVOC0S4pGxDLkWaw/BDTx8vYRDkF8LWNQn05oBKMPhyjRjDJKZNMRcCy+CIr0hvuINBBFOKHi0QoisOUIMHQru2MnPYc/sLie9j+6jsIlNtmnXMyTOEF3ie933xRRZ59NINFfgCQxG9KAKSeoLCd2RBAU0Lnm5tvvm1xLN5cjHHmgk3etss6cZe3c07lIT+cxM+p45KFH501odBcincPEHkN7ilLK1XsyibKl1qn0VHNbFEKmKM294X3KeawODH54bU87DBm008fSvaMmim1eT5twAG3Z9ogMAmGKhpimlOmjzvQ2gQQsQgTikYAH0xO9ykfGIsZ0Ps8+OxasWqHjdd/hjah++eutbUsZqJ/cPcaW/kQOlce9W6ukVptdWErXY5zfXANgje3zve609AwAAsUhRYo5VxGE+ZzKu3xItN06iCiTsp+tpGsNKOUXi7xb1QA1yNdd3x57U7m1jbubc/LqnYk/SSxKZS7OPzKuyOF1qiO69Ntqd4vibbj8UOlBNNVmfnvobnm5WqOHTtyb2Vp9Pl1VEiF054PZ5pnSPEaluKVVzVGu4temwbIOT2/PtBibztie0FR+vwXHtYPTfC20ZK3/8E+N2rT6lFGL0t1vcp/NewPkXPP1pfIN439S+EpTmOFk8Yl7mbZWdpLkOfCwxq73vByAlTx8/vDhlqk24qKzvwaNxcpJBFeZmBAcBvJgItkELK1E/b/mQT9KUWyGq1KNYMsg+3A7V5jJyCxz/QEggTgwgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
