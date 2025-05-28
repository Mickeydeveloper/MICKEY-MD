const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "✅", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER; // Fetch owner number from config
        const ownerName = config.OWNER_NAME;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/g3sq1a.png' }, // Image URL from your request
            caption: `╭━━〔 *𝙼𝙸𝙲𝙺𝙴𝚈-𝙼𝙳* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *Here is the owner details*
┃◈┃• *Name* - ${ownerName}
┃◈┃• *Number* ${ownerNumber}
┃◈┃• *Version*: 2.0.0 Beta
┃◈╰─┬──────────┈⊷
┃◈╭─┴────────────●●►

╰──────────────┈⊷
> ©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝓜𝓘𝓒𝓚𝓔𝓨-𝓜𝓓`, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '12036331487561459@newsletter',
                    newsletterName: '𝓜𝓘𝓒𝓚𝓔𝓨-𝓜𝓓',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        // Send audio as per your request
       ,
            p;

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
