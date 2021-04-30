exports.wait = () => {
	return`*「❗」 ᴡᴀɪᴛ ʙʀᴏ ᴄʜʏʏ*`
}

exports.succes = () => {
	return`*「 sᴜᴄᴄᴇss 」*`
}

exports.lvlon = () => {
	return`*「❗」 LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*「❗」 LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*「❗」 ʏᴏᴜʀ ʟᴇᴠᴇʟ ɪs sᴛɪʟʟ ᴇᴍᴘᴛʏ*`
}

exports.lvlnoon = () => {
	return`*「❗」 ʟᴇᴠᴇʟ ɪɴ ɢʀᴏᴜᴘ ɪs ɴᴏᴛ ᴀᴄᴛɪᴠᴀᴛᴇᴅ ʏᴇᴛ*`
}

exports.noregis = () => {
	return`*「⚡」 ᴠᴇʀɪʏ ᴄʜᴇʏʏᴜ ɴᴇɴʙᴀᴀ 「🩸」*\n\nᴛʏᴘᴇ : @verify`
}

exports.baned = () => {
	return`*「❗」SORRY SORRY JUST NIH BRO, BUT YOU ALREADY BANNED YAHAHAHA HAYUUU :V*`
}

exports.premium = (prefix) => {
	return`ᴡʜᴏ?  ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ғᴏʀ ᴘʀᴇᴍɪᴜᴍ ᴜsᴇʀs ᴏɴʟʏ!
 ᴍʏ ʙᴏss ғɪʀsᴛ ᴜᴘɢʀᴀᴅᴇ ᴛᴏ ᴘʀᴇᴍɪᴜᴍ
 ɪғ ɪɴᴛᴇʀᴇsᴛᴇᴅ, ᴄᴏɴᴛᴀᴄᴛ ᴍʏ ᴏᴡɴᴇʀ
 ᴛʜɪs ɴᴜᴍʙᴇʀ ᴏᴋ : ${prefix}owner`
}

exports.rediregis = () => {
	return`*ʏᴏᴜ ʜᴀᴠᴇ ᴠᴇʀɪғɪᴇᴅ ◉‿◉*`
}

exports.stikga = () => {
	return`*「 ғᴀɪʟᴇᴅ 」 try reply/tag ʀᴇᴘᴇᴀᴛ sɪs*`
}

exports.linkga = () => {
	return`*「❗」 sᴏʀʀʏ ᴛʜᴇ ʟɪɴᴋ ɪs ɪɴᴠᴀʟɪᴅ ʙʀᴏ*`
}

exports.groupo = () => {
	return`*「❗」 ɢʀᴏᴜᴘ ᴏɴʟʏ*`
}

exports.ownerb = () => {
	return`*「❗」 ᴏᴡɴᴇʀ ʙᴏᴛ ᴏɴʟʏ*`
}

exports.ownerg = () => {
	return`*「❗」 ᴏᴡɴᴇʀ ɢʀᴏᴜᴘ ᴏɴʟʏ*`
}

exports.admin = () => {
	return`*「❗」 ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ᴏɴʟʏ*`
}

exports.badmin = () => {
	return`*「❗」 ʙᴏᴛ ᴍᴜsᴛ ʙᴇ ᴀᴅᴍɪɴ*`
}

exports.bug = () => {
	return`*ᴛʜᴇ ᴘʀᴏʙʟᴇᴍ ʜᴀs ʙᴇᴇɴ ʀᴇᴘᴏʀᴛᴇᴅ ᴛᴏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ, ғᴀʟsᴇ ʀᴇᴘᴏʀᴛs/ᴍᴀɪɴ2 ᴡɪʟʟ ɴᴏᴛ ʙᴇ ʀᴇsᴘᴏɴᴅᴇᴅ ᴛᴏ*`
}

exports.wrongf = () => {
	return`*「⚡」 ᴡʜᴇʀᴇ ᴛʜᴇ ᴛᴇxᴛ, ʙʀᴏ?*`
}

exports.clears = () => {
	return`*ᴍʏ ʙᴏss sᴜᴄᴄᴇss*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
return`┌「 *ʟᴇᴠᴇʟ ᴜᴘ* 」
│
├ ❏ *ɴᴀᴍᴇ* : ${pushname}
├ ❏ *xᴘ* : ${getLevelingXp(sender)}
├ ❏ *ʟᴇᴠᴇʟ* : ${getLevel} ⇒ ${getLevelingLevel(sender)}
└ ❏ *ʀᴀɴᴋ* : ${role}`
}
 
exports.limitend = (pushname, prefix) => {
	return`*sᴏʀʀʏ ${pushname} ᴛᴏᴅᴀʏ ʟɪᴍɪᴛ ɪs ᴜᴘ*
*ᴛʜᴇ ʟɪᴍɪᴛ ɪs ʀᴇsᴇᴛ ᴇᴠᴇʀʏ ʜᴏᴜʀ 24:00*

\`\`\`ᴜᴘɢʀᴀᴅᴇ ᴘʀᴇᴍɪᴜᴍ ғʀᴇᴇ ʟɪᴍɪᴛ\`\`\`
\`\`\`➸ Rs 50 : 1 ᴍᴏɴᴛʜ\`\`\`
\`\`\`ɪғ ɪɴᴛᴇʀᴇsᴛᴇᴅ, ᴘʟᴇᴀsᴇ ᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴏᴡɴᴇʀ\`\`\`
\`\`\`sᴇɴᴅ ᴏʀᴅᴇʀs : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
ᴛʜᴇ ʀᴇsᴛ ᴏғ ʏᴏᴜʀ ʟɪᴍɪᴛ : ${isPrem ? '9999' : `${limitCounts}`}

ᴍʏ ʙᴏss ᴘʀᴇᴍɪᴜᴍ ᴜᴘɢʀᴀᴅᴇ, sᴏ ɪᴛ s ғʀᴇᴇ ᴛᴏ ᴜsᴇ ʙᴏᴛs`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┌「 *ATM* 」
│
├ ❏ *ɴᴀᴍᴇ* : ${pushname}
├ ❏ *ɴᴜᴍʙᴇʀ* : ${sender.split("@")[0]}
└ ❏ *ᴍᴏɴᴇʏ* : ${uangkau}`
}

exports.donasi = () => {
return`*DONASI BRO*
Paytm wallet ok : 917736716373

paypal : https://

ᴅᴏɴᴀᴛᴇ sᴏ ᴛʜᴀᴛ ᴛʜᴇ ʙᴏᴛ ᴡɪʟʟ ᴄᴏɴᴛɪɴᴜᴇ ᴛᴏ ʙᴇ ᴜᴘᴅᴀᴛᴇᴅ & ᴀᴄᴛɪᴠᴇ`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`🔰 -----[ 「 *ᴀᴅᴠᴇʀᴛɪsᴇᴍᴇɴᴛ ${botName}* 」 ]----- 🔰
──────────────────────────────
◯ *ʀᴇɴᴛ ʟɪsᴛ & ᴄʀᴇᴀᴛᴇ ʙᴏᴛs:*
 ──────────────────────────────
 ◯ *ᴀᴅᴠᴀɴᴛᴀɢᴇs ᴏғ ʙᴏᴛ ʀᴇɴᴛᴀʟ:*
 ◯ *1.  ᴄᴀɴ ᴇɴᴛᴇʀ ʙᴏᴛs ɪɴᴛᴏ ɢʀᴏᴜᴘ*
 ◯ *2.  ᴄᴀɴ ᴜsᴇ ᴘʀᴇᴍɪᴜᴍ ғᴇᴀᴛᴜʀᴇs*
 ◯ *ᴀᴅᴠᴀɴᴛᴀɢᴇs ғᴏʀ ʙᴏᴛ:*
 ◯ *1.  ᴄᴀɴ ʙᴇ ʏᴏᴜʀ ᴏᴡɴ ʙᴏᴛ ᴏᴡɴᴇʀ*
 ◯ *2.  ᴄᴀɴ ᴄʜᴀɴɢᴇ ᴏᴡɴ ʙᴏᴛ ɴᴀᴍᴇ*
 ◯ *3.  ᴄᴀɴ ʙʀɪɴɢ ʙᴏᴛs ᴛᴏ ɢʀᴏᴜᴘ*
 ◯ *4.  ᴄᴀɴ ᴜsᴇ ᴄᴏᴍᴍᴀɴᴅ ᴏᴡɴᴇʀ*
 ◯ *5.  ᴄᴀɴ ʀᴇɴᴛ ᴛʜᴇ ʙᴏᴛs ʙᴀᴄᴋ*
 ──────────────────────────────
 ◯ *ɪғ ᴀᴅᴠᴇʀᴛɪsɪɴɢ ɪɴᴛᴇʀᴇsᴛ*
 ◯ *ᴘʟᴇᴀsᴇ ᴄᴀʟʟ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʙᴇʟᴏᴡ:*
◯ *wa.me/${ownerNumbers}*
──────────────────────────────
🔰 -----[「 ${botName} 」]----- 🔰`
}