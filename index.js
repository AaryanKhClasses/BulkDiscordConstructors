const Discord = require('discord.js')
/**
 * 
 * @param {Discord.Guild} guild The guild to create the channels in
 * @param {{ 
 *  name: String,
 *  type: String,
 *  rateLimitPerUser?: Number,
 *  bitrate: Number,
 *  userLimit: Number,
 *  topic?: String,
 *  parent?: Discord.CategoryChannel,
 *  nsfw?: Boolean,
 *  position?: Number,
 *  permissionOverwrites?: Discord.PermissionOverwrites,
 *  reason?: String }} array The array of channels to create
*/

module.exports.createBulkChannels = function(guild, array) {
    array.forEach(function(channel) {
        guild.channels.create(channel.name, {
            type: channel.type,
            rateLimitPerUser: channel.slowmode ? channel.slowmode : 0,
            bitrate: channel.bitrate ? channel.bitrate : 8000,
            userLimit: channel.userLimit ? channel.userLimit : 0,
            topic: channel.topic ? channel.topic : "",
            parent: channel.parent ? channel.parent : null,
            nsfw: channel.nsfw ? channel.nsfw : false,
            position: channel.position ? channel.position : 0,
            permissionOverwrites: channel.permissionOverwrites ? channel.permissionOverwrites : [],
            reason: channel.reason ? channel.reason : "",
        })
    })
}

/**
 * 
 * @param {Discord.Guild} guild The guild to create the roles in
 * @param {{
 *  name: String,
 *  color?: Discord.ColorResolvable;
 *  hoist?: Boolean,
 *  position?: Number,
 *  mentionable?: Boolean,
 *  permissions?: Discord.PermissionResolvable,
 *  reason?: String,
 *  icon?: Discord.EmojiResolvable,
 * }} array The array of roles to create
 */

module.exports.creatBulkRoles = function(guild, array) {
    array.forEach(function(role) {
        guild.roles.cache.create(role.name, {
            color: role.color ? role.color : "#000000",
            hoist: role.hoist ? role.hoist : false,
            position: role.position ? role.position : 0,
            mentionable: role.mentionable ? role.mentionable : false,
            permissions: role.permissions ? role.permissions : 0,
            reason: role.reason ? role.reason : "",
            icon: role.icon ? role.icon : "", // new
        })
    })
}