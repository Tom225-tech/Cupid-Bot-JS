const Discord = require("discord.js")
const client = new Discord.Client()
const keepAlive = require("./server")

const stats = ["Don't Worry. You Will sooner or later get a companion!!", "You Should Try Again In Next Year", "It will come into your life later on", "He/She is just near you.Go on and Confess."]

const confess = ["Go on. Today is the Best Day to Confess.", "Today is not Lucky Day.So, Try Again Tommorrow!"] 

const suggest = ["confess"]


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Cupid', {type: 'PLAYING'}).catch(console.error)
})

client.on("message", msg => {
  if (msg.content === "love") {
     let user = msg.guild.members.cache.random().user;
     var score = Math.floor(Math.random() * 100) + 1;
    msg.channel.send(`Roses are Red. Violet Are Blue. \nIf that is true. Your love is ${user} UwU. \nBond Score: ${score}💖`);
  }
});

client.on('message', msg => {
  if (msg.content === "rateme") {
    var rating = Math.floor(Math.random() * 100) + 1;
  msg.reply(`Rate Score: ${rating}⭐/100⭐`);
 }

 if (msg.content === "status") {
   const status = stats[Math.floor(Math.random() * stats.length)]
    msg.reply(status)
 }

 if (suggest.some(word => msg.content.includes(word))) {
   const confession = confess[Math.floor(Math.random() * confess.length)]
   msg.channel.send(confession)
 }
 
});

client.on('message', message => {
     if (message.content.startsWith('!hug')) { 
    let targetMember = message.mentions.members.first();
    if(!targetMember) return message.reply('you need to tag a user in order to hug them!!');
        // message goes below!
         message.channel.send(`<@${targetMember.user.id}> you just got a hug `);
    }
}); 

client.on('message', message => {
     if (message.content.startsWith('?annoy')) { 
    let targetMember = message.mentions.members.first();
    if(!targetMember) return message.reply('Pls tag a user!! ');
    if (targetMember.user.id== `706723155800096789`) return message.reply('Go Die Loser');
        // annoying start
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`)
         message.channel.send(`<@${targetMember.user.id}>`) 
    }
}); 

keepAlive()
client.login(process.env.TOKEN)