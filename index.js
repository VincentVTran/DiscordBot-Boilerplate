const Discord =  require("discord.js");
const data = require("./config.json");
const client = new Discord.Client();

client.once("ready",()=>{
    console.log('Bot is on');
});

//Reads message
client.on('message',(message) =>{
    if(message.content.startsWith("!"+"test")){
        message.channel.send("Message recieved");
    }
    if(message.attachments.size > 0 ){
        message.channel.send("Image was sent");
        console.log(message.attachments);
    }
});

client.login(data.apiToken);