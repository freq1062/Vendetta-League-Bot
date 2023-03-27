const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('ee!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

"use strict";

const prefix = "v!"
const Discord = require('discord.js'),
    client = new Discord.Client({ ws: { intents: Discord.Intents.ALL } }),
    teams = [];
var c;
var ID;

const images = {
    //Enter the image links here, with the name of the team entered. Most of the links below do not work anymore
    /*
    ClouT: "https://cdn.discordapp.com/attachments/814581111563747329/814585018298007562/unknown.png",
    COMBATARMYUNITED: "https://cdn.discordapp.com/attachments/814581111563747329/814584417829781555/unknown.png",
    Soul: "https://images-ext-2.discordapp.net/external/-xAVJDdf4Zs2tRY4mnHTcbM4Lw2PQUqz1NxtIKpqtp8/%3Fsize%3D1024/https/cdn.discordapp.com/icons/823337857740701706/4a061f9842036a200d65faedf5816d0b.webp",
    Matrix: "https://media.discordapp.net/attachments/814581111563747329/814581498312392744/unknown.png",
    TzDogWalkers: "https://media.discordapp.net/attachments/814581111563747329/814584156059074570/image0.png",
    TT: "https://media.discordapp.net/attachments/813898294102327336/818714293461319740/Screenshot_2020-10-02_at_15.png?width=538&height=427",
    Florescent: "https://media.discordapp.net/attachments/814581111563747329/814588813815840778/unknown.png",
    D3MON5: "https://media.discordapp.net/attachments/814581111563747329/814695209991929866/PORGERS.png?width=427&height=427",
    YourDog: "https://media.discordapp.net/attachments/814581111563747329/815403986273959946/doglol.png?width=427&height=427",
    Trassh: "https://media.discordapp.net/attachments/814581111563747329/815768780587532288/Trassh_Logo.jpg?width=416&height=427",
    Blaze: "https://media.discordapp.net/attachments/813902591426822204/816006901723955210/Screenshot_2021-03-01_at_12.png",
    $nip: "https://media.discordapp.net/attachments/814581111563747329/819334665268887613/unknown.png?width=427&height=427",
    Oceanic: "https://media.discordapp.net/attachments/818095217122213929/852958927573745754/8F918BAF-2837-4F4D-AFB9-A601D05A2241.jpeg?width=498&height=427",
    iMoRTaL: "https://media.discordapp.net/attachments/813898294102327336/818230726767017994/iMoRTaL_Final_3.jpg",
    f4: "https://lh6.googleusercontent.com/V-5g1HzYk5yJBTDhyOv_sSgMHtaWF5MzY33qoIULN91o8kI82BHO5QzaZPOYf1nrT0xR5jv815uULsnPfxyxVV8B4-A_afW8BMEr8OpIMaWYGhBBDA2G8mAegZvJnC8V1hXLr0CKbuY",
    Carbon: "https://media.discordapp.net/attachments/818456227674718228/848972127230361650/unknown.png",
    Infinity: "https://media.discordapp.net/attachments/846144378438680576/847510432033275904/Infinity.png",
    Homs: "https://media.discordapp.net/attachments/827622297758072872/846117095393853490/Screen_Shot_2021-05-23_at_4.06.31_PM.png?width=828&height=595",
    Ignite: "https://media.discordapp.net/attachments/834771691619614790/855105379323346954/IGNITE.png?width=406&height=406",
    "☆[HYDRA]☆": "https://media.discordapp.net/attachments/847300591118057512/847312166482739220/USER_SCOPED_TEMP_DATA_orca-image-840715639.jpeg?width=528&height=595",
    ELITE: "https://media.discordapp.net/attachments/833170300275130408/846204511063769118/ELITE.png",
    Corrupt: "https://media.discordapp.net/attachments/830090908531818547/847473638726434826/Screenshot_2021-05-27_9.55.23_AM.png",
    Vapor: "https://media.discordapp.net/attachments/828789251659137046/846118439738277928/unknown.png",
    DPS:
    "https://lh6.googleusercontent.com/_oaAQE6zPZVzvdhimFdOyOjQComUoWkQyaKregTP9aq8LQp-17rRYzqlj3xjVNsWPlhECZtKFYKIrMkaec8bulnZXctFyJ5ZRmjJcj9nUEs_HpGVXxHge2JbbZH3cXI09ifAhgh-hTY",
    XN: "https://mail.google.com/mail/u/2?ui=2&ik=cc784d5c8b&attid=0.1&permmsgid=msg-f:1703738019162093844&th=17a4e4b39e7bf914&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-LZkNObrSER6bb5mB2xxr_7eNkiWTJ387vUwcEf60NQ3j7L-E9pNlp1wW8lSLz7Y5_LOh7nRldyloXBPrwegOlZ-sZSIHY62OGIjFztSSgWr4HwBLmYxXdLHU&disp=emb&realattid=ii_kqfeg7130",
    Matrix: "https://lh6.googleusercontent.com/SV7ht6SkXKH6L3Hr08qUe1Ox-Q7BYeONKW2qIS7O5OuF_hnoDzABDARl6oe87SFFIR1ei-vi2ZRB9dvXSXVImcJZqOGxOIyK6OWYG-_xpvYd0pJaeBm0-62G_9Yohw2DTQ2O0p6qt2Q"/*,
    Saturn: "https://cdn.discordapp.com/splashes/828440484062036030/fa3e8fa2bb4a500987fcffcf5f9189cb.jpg?size=1280"
    */
}

const descriptions = {
  //Enter optional descriptions here, if no description just do "" as shown below.
  /*  
  ClouT: "**we high** as clouds clouds clouds clouds clouds clouds clouds",
    COMBATARMYUNITED: "",
    GD: "DM [GD] Genius1 to join this pog #1 clan",
    Morgue: "best server ever",
    TzDogWalkers: "",
    TT: "",
    Florescent: "",
    D3MON5: "",
    YourDog: "",
    Trassh: "(This is the iMoRTaL Server)",
    Blaze: "",
    $nip: "",
    Oceanic: "",
    Gravity: "",
    iMoRTaL: "",
    Vapor: "vapor on top",
    ELITE: `NA/SA CLAN (WHIT EE.UU, PERÚ, MÉXICO, COLOMBIA, CANADA, ETC PPL)-\n
    PRO MEMBERS AND COMPETITIVE WS :sunglasses:\n
    NO TOXIC COMUNITY   :skull_crossbones:\n
    CLAN FOR PLAY WHIT FRIENDS :space_invader:\n
    JOIN FOR MEET NEW PLAYERS  :handshake:`
    */
}

const invites = {
  //Enter team discord invites here. I'm pretty sure none of the invites work anymore 
  /*
    ClouT: "https://discord.gg/jVH7D4np9C",
    COMBATARMYUNITED: "https://discord.gg/S7wF6x4cxF",
    GD: "https://discord.gg/PvzrcV6EZ4",
    Morgue: "https://discord.gg/Wtu3vggDT9",
    TzDogWalkers: "",
    TT: "https://discord.gg/tXa3FVPxz5",
    Florescent: "https://discord.gg/wpHnm4WUaC",
    D3MON5: "https://discord.gg/avcz7YQRFw",
    YourDog: "https://discord.gg/nT4NXNXNC8",
    Trassh: "https://discord.gg/S9wZn2h3J8",
    Blaze: "https://discord.gg/6sCCRHJY3e",
    $nip: "https://discord.gg/jYe2wKxE53",
    Oceanic: "https://discord.gg/sejDMKKZAk",
    Gravity: "",
    iMoRTaL: "https://discord.gg/QqXnFq4DeA",
    f4: "https://discord.gg/2kFQwQyseP",
    Matrix: "",
    kanyebreast: "https://discord.gg/RJ9xryVq",
    Carbon: "https://discord.gg/d3x8YYfbvJ",
    Infinity: "",
    Ignite: "",
    XN: "",
    TS: "",
    DPS: "",
    Homs: "",
    Corrupt: "",
    ELITE: "https://discord.gg/8hK8sbh2Ft",
    "☆[HYDRA]☆": "https://discord.gg/UjJSCuXw",
    Vapor: "https://discord.gg/2rmDEDvw6G"/*,
    Saturn: "https://discord.gg/rScUscPgdV"
    */
}

class team {
  //Optional and required things in a team
    name;
    color;//Hex code
    captain;//UserID
    delegates = [];//UserIDS
    members;// number of members
    membrs = [];//Captain + delegates + player userID
    img;//Image link
    invite;
    footer;
    desc;//Description
    cheerleaders = [];
    total;
    constructor(n, m, c) {
        this.name = n;
        this.members = m;
        this.total = m.length;
        this.color = c;
        this.setTeamRoles();
        this.img = this.getSrc();
        this.invite = this.getInv();
        this.footer = this.getFooter();
        this.desc = this.getDesc();
    }

    setTeamRoles() {
        this.members.forEach((m) => {
            if (m.roles.cache.array().find(r => r.name.indexOf("《⚔️》Team Captains") != -1)) {
                this.captain = m;
            } else if (m.roles.cache.array().find(r => r.name.indexOf("《⚔️》Team Delegate") != -1)) {
                this.delegates.push(m);
            } else if (m.roles.cache.array().find(r => r.name.indexOf("《📣》Team Cheerleader") != -1)) {
                this.cheerleaders.push(m);
            } else {
                this.membrs.push(m);
            }
        });
    }
    getSrc() { return images[this.name.replace(/ +/g, "").trim()]; }
    getInv() { return invites[this.name.replace(/ +/g, "").trim()]; }
    getFooter() { if (this.invite != "") { return "Click bolded team name for invite" } else { return ""; } }
    getDesc() { return descriptions[this.name.replace(/ +/g, "").trim()]; }
    formatPings(group) {
        var pings = "";
        if (Array.isArray(this[group])) {
            this[group].forEach(m => {
                m ? pings += `<@${m.nickname ? "!" : ""}${m.id}> ` : "";
            });
        } else {
            pings = this[group] ? `<@${this[group].nickname ? "!" : ""}${this[group].id}> ` : "";
        }
        return pings;
    }
    createEmbed() {
        const embed = new Discord.MessageEmbed()
            .setColor(this.color)
            .setThumbnail(this.img ? this.img : "")
            .addFields({ name: "Team Name", value: `•${this.name}`, inline: true }, { name: "Team Color", value: `•\`${this.color}\``, inline: true }, { name: "Total(No cheerleaders)", value: `•${parseInt(this.total) - parseInt(this.cheerleaders.length)}`, inline: true }, { name: "Team Captain", value: `•${this.captain}` }, { name: "Team Delegate(s)", value: `•${this.delegates}` }, { name: "Team Cheerleader(s)", value: `•${this.cheerleaders}` }, { name: "Team Members", value: `•${this.membrs}` })
            .setDescription(`${this.desc ? this.desc : ""}`)
            .setAuthor(`Team ${this.name}`, "https://images-ext-1.discordapp.net/external/Ebffg9t0tfcrbrRgqIaXlybGx6TY6IAd8n2mRibYgBA/https/media.discordapp.net/attachments/812441034936156202/813885095983317052/8bb565dd878e174c911749ad36767fc8.png", this.invite)
            .setFooter(this.footer)
            .setTimestamp()
        return embed;
    }
}

function updateRoster(args) {
    const roster = new Discord.MessageEmbed()
        .setColor("#000000")
        .setDescription(args.toString())
        .setAuthor("Roster Change", "https://images-ext-1.discordapp.net/external/Ebffg9t0tfcrbrRgqIaXlybGx6TY6IAd8n2mRibYgBA/https/media.discordapp.net/attachments/812441034936156202/813885095983317052/8bb565dd878e174c911749ad36767fc8.png")
    return roster;
}

client.once('ready', () => {
    console.log('Bot ready!');
    c = client.channels.cache.array().find(c => c.id == 813546386696044554);
});

//https://www.youtube.com/watch?v=oHg5SJYRHA0 open this link i dare u

function initiateTeams(first = true, cmd) {
  //This would create a lot of embeds in a channel and put in all the entered information in a neat looking format.
    const teamRole = / - ws/,
        roles = client.guilds.cache.array()[0].roles.cache.array();
    teams.splice(0, teams.length);
    roles.forEach(r => { if (String(r.name).match(teamRole) != null) { teams.push(new team(String(r.name).replace(/ - ws|《⚔️》/g, "").trim(), r.members.array(), r.hexColor)); } });
    if (cmd == "update") {
        if (!first) { clearChannel(); }
        sendTeamInfo();
    } else if (cmd.match(/info/i) != null) {
        var input = new RegExp(cmd.slice(5), 'i')
        console.log(`CMD = ${cmd}, input = ${input}`)
        var teamNames = []
        for (var i = 0; i < teams.length; i++) {
            teamNames.push(teams[i].name.toString().toLowerCase())
        }
        for (var i = 0; i < teams.length; i++) {
          //Special cases, you could run a command like "v!clout" and it would return only that teams' embed. Added these for the common "abbreviations", if you will
            if (cmd.slice(5).toLowerCase() == "cloud team") { return teams[teamNames.indexOf("clout")].createEmbed() }
            if (cmd.slice(5).toLowerCase() == "noob team") { return teams[teamNames.indexOf("gd")].createEmbed() }
            if (cmd.slice(5).toLowerCase() == "immortal") { return teams[teamNames.indexOf("imortal")].createEmbed() }
            if (cmd.slice(5).toLowerCase() == "is freq a furry") { return "no but you know who is a furry? inexistent"; }
            if (cmd.slice(5).length <= 1) { return "doing super short searches bad"; }
            var life = new RegExp("meaning of life", "i")
            if (cmd.slice(5).match(life) != null) { const rickroll = new Discord.MessageEmbed().setTitle("THE MEANING OF LIFE").setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ").setFooter("Only works if you open in new tab"); return rickroll; }
            var mom = new RegExp("your mom", 'i')
            if (cmd.slice(5).match(mom) != null) { return "So far, the info on your mom is so incedibly difficult to describe that no command exists thus far. Please be patient while the programming team adds an appropriate response for this topic."; }
            if (teams[i].name.match(input) != null) { return teams[i].createEmbed() }
        }
        var teamarr = [];
        for (var i = 0; i < teams.length; i++) {
            teamarr.push(` ${teams[i].name}`)
        }
        return `Your search "${cmd.slice(5)}" did not match with any team registered(${teamarr} )`
    } else if (cmd.match(/role/i) != null) {
        var input = cmd.slice(5).toString()
        var members = message.guild.roles.cache.find(r => r.name === input).map(member => {
            return `<@${member.user.id}>`;
        })
        if (members.length >= 10) {
            length = members.length;
            members = [];
        }
        if (members != undefined) {
            const embed = new Discord.MessageEmbed()
                .setTitle(`Info about role "${input}"`)
                .setColor(role.colorAsHex.toString())
                .setDescription(`Role: Created at ${role.createdAt}(UTC)`)
                .addFields({ name: "Permissions number(use a converter to see)", value: role.serialize, inline: true }, { name: "Colour", value: role.colorAsHex(), inline: true }, { name: "Is it separate", value: role.hoist, inline: true }, { name: `Members(${members.length + length})`, value: members.length + length })
                .footer(`Role ID: ${role.id} | Server ID: ${role.server}`)
            return embed
        } else {
            return `No role found called "${input}"`
        }
    }
}

function sendTeamInfo() {
  //Initiate teams makes the message data, this actually sends it. Replace the channelID with whatever channel the list will be in
    const a = [];
    const c = client.channels.cache.array().find(c => c.id == 869786838267727924)
    teams.forEach(t => { a.push(t.createEmbed()); });
    for (var i = 0; i < a.length; i++) {
        c.send(a[i])
    }
}

function clearChannel() { client.channels.cache.array().find(c => c.id == 869786838267727924).messages.cache.array().forEach(m => { if (m.deletable) { m.delete(); } }) }

function sendTime(message) { //not done yet <- I wrote that comment 3 years ago so just ignore this function
    var msg = message.slice(4);

    const roster = new Discord.MessageEmbed()
        .setColor("#000000")
        .setDescription(msg.toString())
        .setAuthor("Roster Change", "https://images-ext-1.discordapp.net/external/Ebffg9t0tfcrbrRgqIaXlybGx6TY6IAd8n2mRibYgBA/https/media.discordapp.net/attachments/812441034936156202/813885095983317052/8bb565dd878e174c911749ad36767fc8.png");
    return roster;
}

function listMembers() { // Was used in a prank
    const ch = client.channels.cache.array().find(c => c.id == 815277703645102120).catch(e => {console.error(e)}),
        members = client.guilds.cache.array()[0].members.cache.array();
    members.forEach(m => { ch.send(`Tag: ${m.user.tag} UserID: ${m.id}`); }).catch(e => {console.error(e)});
}

function help() {
    const help = new Discord.MessageEmbed()
        .setTitle("Vendetta League Bot V2.0 Commands")
        .setDescription(`

Note: this list is incomplete because of secret commands and I never updated this haha

**Admin/Programming team only**
v!list: Lists everyone's tag and userIDs(someone tell me the new channel)
v!update: The rosters are updated; to be safe you should purge the channel first

**Everyone**
v!info [team]: Get the roster for a specific team
v!role [role name]: Get info about a role
v!help: ok

Secret command that you'll never find: activate rainbow role
        `)
        .setFooter("Try \"v!info the meaning of life\"")
    return help
}

const nicknames = {};

function resetNames(message) { // I changed everyone's names to "crabz" for april fools 2021 and changed their names back with this
    const mbrs = message.guild.members.cache.array();
    for (var i = 0; i < mbrs.length; i++) {mbrs[i].setNickname(nicknames[mbrs[i].id].toString()).catch(e => {if (e) console.error(`Could not reset name of ${mbrs[i].user.username} due to "${e.message}"`);});}
    message.channel.send("Names are changing back")
}

function emergencyReset(message) { // Yeah this changed their names back to their discord normal names but deleted the nicknames you can imagine it didn't go well
    const mbrs = message.guild.members.cache.array();
    for (var i = 0; i < mbrs.length; i++) {
        console.log(`${mbrs[i].displayName} => ${mbrs[i].user.username}`)
        mbrs[i].setNickname(mbrs[i].user.username).catch(e=> {if (e) console.error(e.message)})
    }
}

function changeNames(message) {
    var name = message.content.slice(14)
    const mbrs = message.guild.members.cache.array();
    for (var i = 0; i < mbrs.length; i++) {
        nicknames[mbrs[i].id] = mbrs[i].displayName;
        if (name.endsWith("#x")) {mbrs[i].setNickname(`${name}#${i}`).catch(e => { if (e) {console.error(`Could not change name of ${mbrs[i].tag} due to "${e.message}"`); } });}
        else {mbrs[i].setNickname(name.toString()).catch(e => { if (e) {console.error(`Could not change name of ${mbrs[i].tag} due to "${e.message}"`); } });};
    }
    if (name.endsWith("#x")) {message.channel.send(`Names are being changed to ${name}, numbered(#1, #2, etc.)`)} 
    else {message.channel.send(`Names are being changed to ${name}`)}
}

function readJson(filePath, cb) {//I tried moving the data to a JSON file, but I didn't know how to at the time. 
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
}

function writeJson(newData, file) {//Never used either
    const jsonString = JSON.stringify(newData, null, 2)
    fs.writeFile(file.toString(), jsonString, err => {
        if (err) {
            console.log("Error writing file:", err)
        } else {
            console.log("Successfully wrote file")
        }
    })
}

Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function rhinoUN(message) {//Troll a specific guy
    var found = false;
    var members = message.guild.members.cache.array();
    for (var i = 0; i < members.length; i++) {
        if (members[i].id == "692144840355610685") {
            found = true; 
            return members[i].nickname;
        }
    }
    if (!found) {
        console.log(`Rhino not found in guild ${message.guild.name}`)
        return "rhino"
    }
}

function createRules(message, send) {//Rules embeds (Fancy) 
    if (send) {
        const image = new Discord.MessageEmbed()
            .setImage("https://media.discordapp.net/attachments/793953464027840524/834496244976975973/VINFO.png?width=1520&height=856")
        const rules = new Discord.MessageEmbed()
            .setTitle("Rules: Vendetta League")
            .addField("1. Have common sense",
`Basically, don't be dumb and you'll be fine; Please follow everything on Discord's [TOS](https://discord.com/terms) and [Community Guidelines](https://discord.com/guidelines)`)
            .addField("2. Don't be toxic",
"Being toxic sometimes is ok, for competition but if you're being excessively toxic by cursing out people, making racist remarks, or being annoying to an extent, then we will quite possibly mute you or ban you.")
            .addField("3. Don't beg for mod and positions",
`We have an [application](https://docs.google.com/forms/d/e/1FAIpQLSflEWMVPD89Qtc3oPkBt5YNwZr-ZeZASsX9Xqu8DCRk-6KUkA/viewform?usp=sf_link) for that, and regular staff updates. We will give you permissions if we feel that you deserve them. Also, we promote people with special skills like being able to make bots or something so if you have something like that please let us know!`)
            .addField("4. Keep topics in the designated channels.",
"Don't have a whole conversation in war results, bot commands in general, etc. Those messages will be deleted.")
            .addField("5. No advertisements",
"This is not the place to post advertisements and if that's all you came for then I guess you should leave.")
            .addField("6. Respect the moderators' actions and don't mini-mod",
"We have moderators for a reason; Most if not all of our moderators have probably been around Vendetta longer than you have; not that they won't ever make mistakes, but know that if they make a decision there's probably reason behind it.")
            .addField("7. No NSFW",
"Some random NSFW jokes are ok, but if you post a picture that has anything NSFW in it it will quite possibly be removed and you'll be warned. Repeated offenses will result in a ban.")
            .addField("8. No raiding and/or nuking",
"We just happen to have gone through a bunch of those, so here's a few mini rules that might make it harder: a) No inviting unverified bots. b) Anti spam measures are enabled and will mute you. c) If anyone sees a file or a link that is either from someone that you don't know or is \"too good to be true\", don't click it. It's probably an IP grabber or token logger.")
            .addField("9. Don't register teams late",
"Generally, there is about a month space in which you can register teams. Before a season, you can register at any time, we will ping everyone when registrations for the next season formally open, and during a season you can register your team up until about 4 weeks in.")
            .addField("10. Have fun!",
"GG <:duccdance:834499224586420265> ecks dee")
        const rr = new Discord.MessageEmbed()
            .setTitle("React for the info you would like to recieve")
            .setDescription(`
:mega:《:exclamation::exclamation:》Announcements ping
:crossed_sworrun thds:《:exclamation::exclamation:》War announcements ping
:trophy:《:exclamation::exclamation:》War results ping
:question:《:exclamation::exclamation:》Vendetta perspective ping
:white_check_mark:《:exclamation::exclamation:》Poll ping
:newspaper2:《:exclamation::exclamation:》News ping
:clapper:《:exclamation::exclamation:》YT Upload ping
:handshake:《:exclamation::exclamation:》Promotion ping
:tada:《:exclamation::exclamation:》Giveaway ping
:basketball:《:exclamation::exclamation:》Sports Ping
            `)
            .setFooter(`React to gain the role, react again to remove it also dont spam lol`)
        var c = message.channel;
        c.createWebhook("Vendetta League", {
            name: "Vendetta League",
            avatar: "https://media.discordapp.net/attachments/793953464027840524/835180477073195068/vendetta.png"
        }).then(w => {
            w.send(image)
            w.send(rules)
            w.send(rr).then(message => {
                message.channel.messages.fetch({ limit: 1 }).then(messages => {
                    const lastMessage = messages.first();
                    if (lastMessage.author.bot) {
                        ID = lastMessage.id;
                        console.log(`ID: ${ID}`)
                    } else {
                        console.log("User message")
                    }
                }).catch(console.error)
            }).catch(console.error)
        }).catch(console.error);
    }
}
const render=(arr)=>arr.map(arrr=>console.log(Object.keys({arr})[0]))
async function removeR(message, emoji) {
    const msg = await message.channel.messages.fetch(ID),
    Users = msg.reactions.resolve(emoji.toString()).users.cache.array()
    Users.forEach(e => {
        if (e.id != "814505290874880032") {
            msg.reactions.resolve(emoji.toString()).users.remove(e.id).catch(e => console.log(e));
        }
    });
}

const Roles = {//Custom Reaction Roles
    an: ["854908407358423080", "📣"],
    wa: ["854908406631497759","⚔"],
    wr: ["854908408071061564","🏆"],
    vp: ["854908408918835210", "❓"],
    np: ["854908411653390346", "🗞"],
    pp: ["854908412449390632", "✅"],//
    yp: ["854908410720813106", "🎬"],
    ap: ["854908409722437642", "🤝"],
    gp: ["854908414608801793", "🎉"],
    sp: ["854908416006422579", "🏀"]
}

function rr(ra, reaction, user, emoji) {
    var mbr = reaction.message.guild.members.cache.get(user.id)
    if (mbr.roles.cache.find(r =>r.id === ra[0])) {
        mbr.roles.remove(ra[0]);
        removeR(reaction.message, emoji);
    } 
    else {
        mbr.roles.add(ra[0]);
        removeR(reaction.message, ra[1]);
    }
}

client.on("messageReactionAdd", (reaction, user) => { // When a reaction is added
    if(reaction.message.id == ID){
        if(user.bot) {return;}
        if (reaction.emoji.name == '📣'){rr(Roles.an, reaction, user, Roles.an[1])}
        else if (reaction.emoji.name == "⚔"){rr(Roles.wa, reaction, user, Roles.wa[1])}
        else if (reaction.emoji.name == '🏆'){rr(Roles.wr, reaction, user, Roles.wr[1])}
        else if (reaction.emoji.name == '❓'){rr(Roles.vp, reaction, user, Roles.vp[1])}
        else if (reaction.emoji.name == '🗞'){rr(Roles.np, reaction, user, Roles.np[1])}
        else if (reaction.emoji.name == '✅'){rr(Roles.pp, reaction, user, Roles.pp[1])}
        else if (reaction.emoji.name == '🎬'){rr(Roles.yp, reaction, user, Roles.yp[1])}
        else if (reaction.emoji.name == '🤝'){rr(Roles.ap, reaction, user, Roles.ap[1])}
        else if (reaction.emoji.name == '🎉'){rr(Roles.gp, reaction, user, Roles.gp[1])}
        else if (reaction.emoji.name == '🏀'){rr(Roles.sp, reaction, user, Roles.sp[1])}
    }
});

/*
announcements 
war announcements
war results 
vendetta perspective
news ping 
poll ping
Yt ping
partner ping
giveaway ping
*/

function createWarRules(message) {//More fancy Embeds
    var tocid;
    const links = {};
    const image = new Discord.MessageEmbed()
    .setImage("https://media.discordapp.net/attachments/793953464027840524/835297970685345832/VINFO_1.png?width=760&height=428")
    message.channel.send(image)
    const TOC = new Discord.MessageEmbed()
    .addField(`Table of Contents`,`
**1.** 4 POINT SYSTEM
**2.** 3 STRIKE SYSTEM
**3.** LATE TO WAR PUNISHMENTS
**4.** WEAPONS/EQUIPMENT RULES
**5.** WAR SCHEDULING RULES
**6.** PLAYOFFS/COOLDOWNS FOR PICKUPS & TRADES
**7.** OTHER WAR FORMAT RULES
**8.** OTHER ILLEGAL ACTIONS
**9.** CONDITIONS TO REDO A ROUND
**10.** WAR MODDING GUIDELINES AND RULES
**11.** SURVIV.IO LINKS
    `)
    .setFooter("Rules by Vendetta League")
    message.channel.send(TOC).then(sent => {
        tocid = sent.id; 
        console.log(`TOCID:${tocid}`)
        message.channel.messages.fetch(tocid).then(msg => {
            console.log(`ID: ${msg.id}`)
            links.TOC = msg.url
            console.log(`LINK: ${links.TOC}`)
        })
    })
    setTimeout(() => {
    const FPS = new Discord.MessageEmbed()
    .addField(`===========================================================`, `
\`\`\`md
## 4 Point System
\`\`\`
- The first team that gets 4 points wins the war.
- If your team outlives the other team, you get 1 WAR POINT.

[__To top__](${links.TOC})
    `)
    const TSS = new Discord.MessageEmbed()
    .addField(`===========================================================`, `
\`\`\`md
## 3 Strike System
\`\`\`
- Teams that get 3 strikes forfeit 1 point to the enemy team.
- Strike point count will reset to 0 upon each forfeited point (unless the strike amount was greater than 3).
- Strike point counts for both teams are reset to 0 after every entire war.
- How do you receive strikes?
- See the “CONDITIONS TO REDO A ROUND” and “OTHER ILLEGAL ACTIONS” sections below for their penalties.

[__To top__](${links.TOC})
    `)
    const LWP = new Discord.MessageEmbed()
    .addField(`===========================================================`, `
\`\`\`md
## Late to War Punishments
\`\`\`
1. If a team is not in DRAG VC by 15 minutes of DECIDED WAR TIME and READY TO SCOUT/PLAY, the team that isn't showing up forfeits 1 WAR POINT.
2. If a team is not in DRAG VC by 20 minutes of DECIDED WAR TIME and READY TO SCOUT/PLAY, the team that isn't showing up forfeits 2 WAR POINTS.
3. If a team is not in DRAG VC by 25 minutes of DECIDED WAR TIME and READY TO SCOUT/PLAY, the team that isn't showing up forfeits 3 WAR POINTS.
4. If a team is not in DRAG VC by 30 minutes of DECIDED WAR TIME and READY TO SCOUT/PLAY, the team that isn't showing up forfeits the ENTIRE WAR.

[__To top__](${links.TOC})
    `)
    .addField(`===========================================================`, `
\`\`\`md
## Within War Delay Punishments
\`\`\`
- If a team is not ready for over 10 minutes since the other team declared they’re ready to scout/play, the team that isn’t showing up forfeits 1 WAR POINT.
- NOTE: This doesn’t apply if both teams agree to not penalize the delaying team.
\`\`\`md
## Double Forfeit if War is Incomplete by Matchups Deadline
\`\`\`
- If both teams do not schedule their war by the official matchups deadline, both teams forfeit (receiving a 0-4 war result). This can be negated at organizers' discretion.

[__To top__](${links.TOC})
`)
    const WER = new Discord.MessageEmbed()
    .addField(`===========================================================`,`
\`\`\`md
## Weapons/Equipment Rules
\`\`\`
- BANNED: AWM, Perks, ANY EVENT-GEAR/CONSUMABLES
- ALLOWED: Pan, Everything else
    
**Holding BANNED equipment for longer than 10 SECONDS during a war results in forfeiting 1 WAR POINT and a REDO.**

- NO EXCEPTIONS (unless both teams agree to negate the punishment)

[__To top__](${links.TOC})
    `)
    const WSR = new Discord.MessageEmbed()
    .addField(`===========================================================`, `
\`\`\`md
## War Scheduling Rules
\`\`\`
- If TEAM #1 offers a war time and:
- TEAM #2 does NOT offer a reasonable counteroffer war time (before 1 day before deadline)
- Then that war time offered by TEAM #1 will be the CONFIRMED final war time unless both teams agree to war at the time that TEAM #2 presented.
\`\`\`md
## What counts as a reasonable war time scheduling offer:
\`\`\`
- The proposed time is more than 24 hours before official matchups deadline
- The proposed time is not during school hours
- NOTE: If both teams agree, they may schedule their war outside of this time frame
\`\`\`md
## Other:
\`\`\`
- If no team offers a time, both teams tie(0-0)
- If both teams offer times but cannot agree to any, an extension to the matchups deadline can be made at organizer's discretion

[__To top__](${links.TOC})
    `)
    const CPT = new Discord.MessageEmbed()
    .addField(`===========================================================`, `
\`\`\`md
## Playoffs/Cooldowns for Pickups & Trades
\`\`\`
**Trades:** NO COOLDOWN unless the players being traded played from the previous team already participated during the current period. Players that already participated in a war aren’t eligible to play for the new team until the next war period.
**Leaves:** 1 week cooldown before becoming eligible to play
**Drops:** NO COOLDOWN
**Pickups:** NO COOLDOWN
    `)
    .addField(`===========================================================`, `
\`\`\`md
## NOTE:
\`\`\`
- Drops do not count as a leave. A drop is when you get dropped by the team and it wasn't your choice.
- Teams are limited to 1 pickup, drop, & trade per matchup. All changes will be noted in <#816003753702326292>.
- All players are only allowed to play in 1 war a period regardless of drops and pickups unless both team captains or delegates agree to allow the player in who’s in question to play for another war.
- Cooldowns can be ignored if both team captains or delegates agree to it
\`\`\`md
## PLAYOFFS RESTRICTIONS
\`\`\`
- Rosters are permanently locked 1 matchup before playoffs until the next Season. (At organizer’s discretion in special circumstances)

[__To top__](${links.TOC})
    `)
    const OWF = new Discord.MessageEmbed()
    .addField(`===========================================================`, `
\`\`\`md
## Other War Format Rules
\`\`\`
\`\`\`md
1. Chicago region servers are default for wars.
\`\`\`
**UNLESS** both teams agree to another region OR region links are not working and both teams have no Chicago default region link leaders
\`\`\`md
2. Normal mode is default for wars.
\`\`\`
**UNLESS** Both teams agree to another mode (highly discouraged)
\`\`\`md
3. Squads mode is default (unless both teams agree to 2v2 for duos mode).
\`\`\`
\`\`\`md
4. 4v4s are default (and can be forced if the other team has 6 or more war members currently online at the time of war)
- 3v3s and 2v2s should only be played for wars ONLY if both teams agree
\`\`\`
    `)
    .addField(`===========================================================`, `
\`\`\`md
5. All war players must be signed in (to avoid ghost playing)
\`\`\`
- **However**, if you choose to play unlogged in, you must:
- 1. Bring it up to the war mods before the war starts
- 2. War mods must agree
- 2b. War mods may ask you to send a screenshot of yourself inside the team vc to prove it’s you playing
**NOTE:** If your team doesn’t bring up the fact that you have a member that is not signed in, your team will receive 1 STRIKE for each member playing that isn’t signed in.
\`\`\`md
6. AWMS, PERKS, and EVENT-ITEMS are banned in Vendetta League and their usage will result in forfeiting 1 WAR POINT.
\`\`\`
- See the banned weapons/equipment section for further clarification.
\`\`\`md
7. War times must be posted in the #🔪┃war-times channel (either by team captain/delegate or a staff member)
\`\`\`
- Team captain/delegate is default responsible for posting in <#813546386469027899> 

[__To top__](${links.TOC})
    `)
    const OIA = new Discord.MessageEmbed()
    .addField(`===========================================================`, `
\`\`\`md
## Other Illegal Actions
\`\`\`
\`\`\`md
1. GHOST PLAYING
\`\`\`
**REQ:** Having a non-same team member play for you during a war under your name OR Playing for someone not on your same war team during a war.
**PENALTY:**
- Team forfeits the war (receiving a 0-4 war result)
- Player who ghost played is dropped from their team and disqualified from playing for the rest of the season and the next season.
- Player who allowed someone else ghost play for you is dropped from their team and disqualified from playing for the rest of the season and the next season.
- Further punishments may be added (at Admin’s discretion)
    `)
    .addField(`===========================================================`, `
\`\`\`md
2. ALTING ON 2 OR MORE WAR TEAMS
\`\`\`
**REQ:** Being on 2 different war teams at the same time under different names.
**PENALTY:**
- IF the sniping player’s team knew about them alting and didn’t tell admin: Every war the alt played in will be forfeited (0-4 loss)
- IF the sniping player’s team didn’t know about them alting: The rounds played will be redone, without the person alting.
- In either case, the alter will be dropped and suspended from the current season; further punishments may be added at organizer’s discretion.
    `)
    .addField(`===========================================================`, `
\`\`\`md
3. HACKING
\`\`\`
**REQ:** If someone uses 3rd-party software to gain an unfair advantage. Health/adren bar counters & crosshairs are allowed.
**PENALTY:**
- Your team forfeits every war that the hacking player played in (receiving 0-4 war results)
- The hacker is suspended for the rest of the season.
**===========================================================**
\`\`\`md
4. SNIPING (Due to purposely getting into same game as war)
\`\`\`
**REQ:** Purposely getting into same game as an ongoing war and affecting the results.
**PENALTY:**
- IF the sniper affects the outcome of the round, they will be warned to stop and if they continue, will be suspended. Any rounds affected will need to be redone.

[__To top__](${links.TOC})
    `)
    const CRR = new Discord.MessageEmbed()
    .addField(`===========================================================`, `
\`\`\`md
## Conditions to Redo a Round
\`\`\`
\`\`\`md
1. DEATH TO HACKER [No Penalty]
\`\`\`
- Must be called out within 30 seconds by leaving the game and spam pinging their war mod or the redo doesn’t apply
- War Mod confirms that the player was killed by a real hacker
- Purposefully dying to a hacker will result in NO REDO and 2 STRIKES (this decision will be made at the War Mod’s discretion)
\`\`\`md
2. JOIN GLITCH / DISCONNECT [1 Strike for every glitch after 3 redos]
\`\`\`
**REQ:** Someone gets join glitch / disconnects within the first 15 sec of game start
- Must be called out within 15 seconds by leaving the game and spam pinging their war mod or it redo doesn’t apply
- NOTE: The count for join glitch / disconnect redo resets after 3 strikes.
\`\`\`md
3. JOINED LATE (at 35+ players) DUE TO YOURSELF [1 STRIKE]
\`\`\`
**REQ:** If not due to war mod or enemy team
    `)
    .addField(`===========================================================`, `
\`\`\`md
4. IF YOU DON'T JOIN SAME LOBBY AS MAIN WAR MODS(and it's YOUR FAULT) [1 strike after it happens twice]
\`\`\`
**REQ:** If it’s your own fault that your team didn’t get into the right game (up to War Mods’ discretion)
- NOTE: If it's not your fault, there is no penalty
**===========================================================**
\`\`\`md
5. IF YOU WISH TO REDO WITHIN FIRST 15 SECONDS FOR WHATEVER REASON [1 STRIKE]
\`\`\`
**REQ:**
- If for whatever other reason your team wants to redo within the first 30 seconds of game start
- Must be called out within 15 seconds by leaving the game and spam pinging a war mod or the redo doesn’t apply
    `)
    .addField(`===========================================================`, `
\`\`\`md
6. DEATH TO SNIPERS [No Penalty]
\`\`\`
**REQ:**
- If 1 or more confirmed snipers killed or heavily affected the outcome of the war(at war mod's discretion)
- Snipers will be punished(see sniper punishments in “OTHER ILLEGAL ACTIONS” section).
**===========================================================**
\`\`\`md
7. BOTH TEAMS AGREE TO REDO UNCONDITIONALLY [No Penalty]
\`\`\`
**REQ:** If both teams agree to redo the round unconditionally 

[__To top__](${links.TOC})
    `)
    const WGR = new Discord.MessageEmbed()
    .addField(`===========================================================`, `
\`\`\`md
## War Mod Guidelines and Rules
\`\`\`
\`\`\`md
- PRE-WAR CHECKLIST:
\`\`\`
1. Make sure both team’s link leaders are from the same default region (e.g. both CHI region)
2. Make sure no one on either team have unlogged in players
3. Make sure the war mod region link leader is from the same default region
4. Make sure both teams are ready to war and there are no potential snipers you are aware of
\`\`\`md
- WAR MOD RULES:
\`\`\`
1. All war moderators are encouraged to have a mic
2. All war moderators should be in agreement about scores, etc. at all times during the war
3. Anyone that isn't a war mod/war recorder/player will not be allowed into war VC's and will be removed upon joining.
4. War mods are discouraged to mod their own wars
5. Staff cannot snipe (doing so will result in a demotion and further punishment)
6. War mods may get demoted at any time due to inactivity or poor moderation

[__To top__](${links.TOC})
    `)
    const LAP = new Discord.MessageEmbed()
    .addField(`===========================================================`, `
\`\`\`md
## Surviv.io Region Links
\`\`\`
Credit to Showtime#0500
    `)
    .addFields(
        {name: "North America", value: `
[NA East(USA - New Jersey)](https://surviv.io/?region=na&zone=nyc/)
[NA Central (USA - Chicago)](https://surviv.io/?region=na&zone=chi/)
[NA West (USA - San Francisco)](https://surviv.io/?region=na&zone=sfo/)
        `}, 
        {name: "South America", value: `
[SA (Brazil - Alagoas)](https://surviv.io/?region=sa&zone=sao/)
        `},
        {name: "Europe", value: `
[EU East (Poland - Warsaw)](https://surviv.io/?region=eu&zone=waw/)
[EU West (Netherlands - Rotterdam)](https://surviv.io/?region=na&zone=sfo/)
        `}, 
        {name: "Asia", value: `
[AS North (Vietnam - Ho Chi Minh City)](https://surviv.io/?region=as&zone=vnm/)
[AS South (Singapore - Singapore)](https://surviv.io/?region=as&zone=sgp/)
        `},
        {name: "Korea", value: `
 [KR (South Korea - Seoul)](https://surviv.io/?region=kr&zone=sel/)
        `},
        {name: "Twitch", value: `
[Twitch (US East & US West](https://www.twitch.tv/popout/survivio/extensions/c79geyxwmp1zpas3qxbddzrtytffta/panel/)
[Twitch Borderless](https://c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/index_twitch.html?anchor=panel&language=en&mode=viewer&state=released&platform=web&popout=true)
        `}
    )
    .addField(`===========================================================`, `
\`\`\`md
## Surviv.io Proxy Sites
\`\`\`
    `)
    .addFields(
        {name: "Link 1", value: `[https://surviv.io/](https://surviv.io/)`},
        {name: "Link 2", value: `[https://surviv2.io/](https://surviv2.io/)`},
        {name: "Link 3", value: `[https://2dbattleroyale.com/](https://2dbattleroyale.com/)`},
        {name: "Link 4", value: `[https://2dbattleroyale.org/](https://2dbattleroyale.org/)`},
        {name: "Link 5", value: `[https://piearesquared.info/](https://piearesquared.info/)        `},
        {name: "Link 6", value: `[https://thecircleisclosing.com/](https://thecircleisclosing.com/)`},
        {name: "Link 7", value: `[https://archimedesofsyracuse.info/](https://archimedesofsyracuse.info/)`},
        {name: "Link 8", value: `[https://secantsecant.com/](https://secantsecant.com/)`},
        {name: "Link 9", value: `[https://parmainitiative.com/](https://parmainitiative.com/)`},
        {name: "Link 10", value: `[https://nevelskoygroup.com/](https://nevelskoygroup.com/)`},
        {name: "Link 11", value: `[https://kugahi.com/](https://kugahi.com/)`},
        {name: "Link 12", value: `[https://chandlertallowmd.com/](https://chandlertallowmd.com/)`},
        {name: "Link 13", value: `[https://ot38.club/](https://ot38.club/)`},
        {name: "Link 14", value: `[https://kugaheavyindustry.com/](https://kugaheavyindustry.com/)`},
        {name: "Link 15", value: `[https://drchandlertallow.com/](https://drchandlertallow.com/)`},
        {name: "Link 16", value: `
[https://rarepotato.com/](https://rarepotato.com/)

[__To top__](${links.TOC})
        `}
    )
    var linkarr = [];
    message.channel.send(FPS).then(sent => {message.channel.messages.fetch(sent.id).then(msg => {linkarr.push(msg.url)})});
    message.channel.send(TSS).then(sent => {message.channel.messages.fetch(sent.id).then(msg => {linkarr.push(msg.url)})});
    message.channel.send(LWP).then(sent => {message.channel.messages.fetch(sent.id).then(msg => {linkarr.push(msg.url)})});
    message.channel.send(WER).then(sent => {message.channel.messages.fetch(sent.id).then(msg => {linkarr.push(msg.url)})});
    message.channel.send(WSR).then(sent => {message.channel.messages.fetch(sent.id).then(msg => {linkarr.push(msg.url)})});
    message.channel.send(CPT).then(sent => {message.channel.messages.fetch(sent.id).then(msg => {linkarr.push(msg.url)})});
    message.channel.send(OWF).then(sent => {message.channel.messages.fetch(sent.id).then(msg => {linkarr.push(msg.url)})});
    message.channel.send(OIA).then(sent => {message.channel.messages.fetch(sent.id).then(msg => {linkarr.push(msg.url)})});
    message.channel.send(CRR).then(sent => {message.channel.messages.fetch(sent.id).then(msg => {linkarr.push(msg.url)})});
    message.channel.send(WGR).then(sent => {message.channel.messages.fetch(sent.id).then(msg => {linkarr.push(msg.url)})});
    message.channel.send(LAP).then(sent => {message.channel.messages.fetch(sent.id).then(msg => {linkarr.push(msg.url)})});
    console.log(`${linkarr}`)
        setTimeout(() => {
            const TOCLKD = new Discord.MessageEmbed()
            .addField(`===========================================================`,`
\`\`\`md
## Table of Contents
\`\`\`
`)
.addFields(
    {name: "-", value: `[**4 POINT SYSTEM**](${linkarr[0]})`},
    {name: "-", value: `[**3 STRIKE SYSTEM**](${linkarr[1]})`},
    {name: "-", value: `[**LATE TO WAR PUNISHMENTS**](${linkarr[2]})`},
    {name: "-", value: `[**WEAPONS/EQUIPMENT RULES**](${linkarr[3]})`},
    {name: "-", value: `[**WAR SCHEDULING RULES**](${linkarr[4]})`},
    {name: "-", value: `[**PLAYOFFS/COOLDOWNS FOR PICKUPS & TRADES**](${linkarr[5]})`},
    {name: "-", value: `[**OTHER WAR FORMAT RULES**](${linkarr[6]})`},
    {name: "-", value: `[**OTHER ILLEGAL ACTIONS**](${linkarr[7]})`},
    {name: "-", value: `[**CONDITIONS TO REDO A ROUND**](${linkarr[8]})`},
    {name: "-", value: `[**WAR MODDING GUIDELINES AND RULES**](${linkarr[9]})`},
    {name: "-", value: `[**SURVIV.IO LINKS**](${linkarr[10]})`}
)
    .setFooter("Rules by Vendetta League")
            message.channel.messages.fetch({around: tocid, limit: 1}).then(msg => {const fetchedMsg = msg.first();fetchedMsg.edit(TOCLKD);})
        }, 40000);
    }, 1000);
}

function getDate()
{
   var result="";
   var d = new Date();
   result += (d.getMonth()+1) +"/"+ d.getDate() + " "+ d.getHours()+":"+d.getMinutes()
   return result;
}


var pduckp = ["None so far"];//For another troll

function ghostpings(message, edit) {//I was tired of people pinging me and then deleting their messages right after "ghostping" so made this to detect them 
  //And then also made it so that i could ghostping other people using this lmao
    var btrue = false;    
    if (message.mentions.members.array().length != 0) {
            var Mentions = message.mentions.members.array()
            for (var i = 0; i < Mentions.length; i++) {
                if (Mentions[i].user.bot) {
                    btrue = true;
                } else {
                    btrue = false;
                }
            }
            if (btrue) {return;}
            if (message.mentions.members.array()[0].id == message.author.id) {
                return;
            } else {
                if (pduckp[0] == "None so far") {
                    pduckp = [];
                }
                var msg = message.content;
                if (message.content.length > 100) {
                    msg = message.content.slice(message.content.length-100) + "..."
                }
                if (pduckp.length == 10) {
                    if (edit != false) {
                        pduckp.shift()
                        pduckp.push(`**By:** ${`<@${message.author.id}>`} \n**Msg:** "${msg}" \n**New msg:** "${edit.content}"\n**Pinged:** ${message.mentions.members.array()} \n**At:** ${getDate()}\n`)
                    } else {
                        pduckp.shift();
                        pduckp.push(`**By:** ${`<@${message.author.id}>`} \n**Msg:** "${msg}" \n**Pinged:** ${message.mentions.members.array()} \n**At:** ${getDate()}\n`)
                    }
                } else {
                    if (edit != false) {
                        pduckp.push(`**By:** <@${message.author.id}> \n**Msg:** "${msg}" \n**New msg:** "${edit.content}"\n**Pinged:** ${message.mentions.members.array()} \n**At:** ${getDate()}\n`)
                    } else {
                        pduckp.push(`**By:** <@${message.author.id}> \n**Msg:** "${msg}"\n**Pinged:** ${message.mentions.members.array()} \n**At:** ${getDate()}\n`)
                    }
                }
            }
            
        }
}

client.on("messageDelete", msgDel => {
    ghostpings(msgDel, false)
})

client.on("messageUpdate", (oldMessage, newMessage) => {//This would send a ghostping every x interval
    setTimeout(() => {
        if (newMessage.deleted) {
            ghostpings(oldMessage, newMessage) 
        }
    }, 100000);
})

client.on("message", message => {//Main message detection
    setTimeout(() => {
        if (message.id == ID) {
            message.react("📣")
            message.react("⚔")
            message.react("🏆")
            message.react("❓")
            message.react("✅")
            message.react("🗞")
            message.react("🎬")
            message.react("🤝")
            message.react("🎉")
            message.react("🏀")
        }
    }, 500);
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).split(/ +/g),
            cmd = args.shift();
        switch (cmd) {
            case "info":
                message.channel.send(initiateTeams(true, message.content.slice(2)))
                break;
            case "clips":
                var e = new Discord.MessageEmbed()
                    .addField("Vendetta League Clip Submisions", "[Upload here](https://forms.gle/fvH9aCKpAzDTpo3e9)")
                message.channel.send(e)
                break;
            case "gp":
                var a = new Discord.MessageEmbed()
                    .setTitle("Recent 10 ghostpings")
                    .setDescription(`${pduckp.join("\n")}`)
                    .setFooter("princeduck is noob")
                message.channel.send(a).catch(e => {message.channel.send(`Error: could not send message due to "${e}"`)})
                break;
            case "role":
                var input = message.content.slice(prefix.length + 5).toString()
                console.log(`Role search = ${input}`)
                var roles = message.guild.roles.cache.array();
                var search = new RegExp(input, "i")
                for (var i = 0; i < roles.length; i++) {
                    if (roles[i].name.match(search) != null) {
                        var role = roles[i]
                        break;
                    }
                }
                if (role == undefined) {
                    message.channel.send(`There was no role found called "${input}"`)
                    break;
                }
                var humans = message.guild.members.cache.array();
                var membersWithRole = [];
                for (var j = 0; j < humans.length; j++) {
                    if (humans[j].roles.cache.find(r => r.name === role.name.toString())) {
                        membersWithRole.push(`<@${humans[j].id}>`)
                    }
                }
                const embed = new Discord.MessageEmbed()
                    .setTitle(`Members with role ${role.name}:`)
                    .setDescription(membersWithRole)
                message.channel.send(embed)
                break;
        }
        if (message.member.hasPermission("ADMINISTRATOR") || message.member.roles.cache.has('819029215617351691')) {
            if (cmd == "list") {
              message.channel.send("Sorry this command isn't working rn because it has a specific userID to put all the member info in and I don't know what it is because I left someone email me on the CM account -freq ")
                listMembers()
            } else if (cmd == "update") {
                initiateTeams(false, "udpate")
            } else if (cmd.startsWith("changenames")) {
                changeNames(message)
            }
            switch (cmd) {
                case "list":
                    listMembers();
                    break;
                case "update":
                    initiateTeams(false, "update")
                case "clear":
                    message.delete();
                    console.clear()
                    break;
                case "leaderboard":
                    message.channel.send("Out of order for a bit :((")
                    break;
                case "help":
                    message.channel.send(help())
                    break;
                case "resetnames":
                    resetNames(message)
                    break;
                case "emergencyreset":
                    emergencyReset(message)
                    break;
                case "rules":
                    createRules(message, true)
                    break;
                case "warrules":
                    createWarRules(message)
            }
        }
    }
});
client.login();//Enter Token Here
