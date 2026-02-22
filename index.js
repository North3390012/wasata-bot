const Discord = require("discord.js");
const fs = require('fs');
const config = require("config.json")
const token = require('./models/tokennss.js');
const { MessageAttachment } = require('discord.js');
const {
  MessageEmbed,
  permissionOverwrites,
  MessageSelectMenu,
  TextInputComponent,
  ChannelType,
  MessageButton,
  MessageActionRow,
  Modal,
  Permissions
} = require("discord.js");const { Client, Intents } = require('discord.js');
const client = new Discord.Client({
  intents: 3276799
});
const figlet = require('figlet');
client.on('ready', () => {
  console.log('Bot is online!');
});
const mongoose = require("mongoose");
mongoose.connect("");////////


client.on("ready", async () => {
  const uu = require('./slash.js')
console.log('MongoDB connected successfully 🎉');
  await uu(client)
  console.log(client.user.tag);
});
process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});

process.on("unhandledRejection", error => {
  return console.log(error)
});



client.once('ready', async () => {

  figlet.text('Developer Coding', { font: 'Henry 3D' }, async function (err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      const chalk = (await import('chalk')).default;
      console.log(chalk.cyan(data));
  });
});

client.on('ready', () => {
  function abady() {
    client.user.setActivity("Developer Coding .gg/7up", { type: 'PLAYING' })
  };
  //ismailmgde
  setInterval(abady, 5000)
})
const FormData = require('./models/formData.js'); // Import the model
///////////////////////////////////////////////////                    ////////////////////////////////////////////


let optionss = [

  {
    label: 'توسط',
    description: "توسط",
    value: 'voice',
  emoji : `📢`,
  
    selected: false
  },
  {
    label: 'Reset',
    description: 'Reset the selected option',
    value: 'reset',
     emoji : `↩️`,
    selected: false
  }
  
  
  ];
  
  optionss.forEach(option => {
  option.value = option.value.slice(0, 100);
  });
  
  
  
  client.on('messageCreate', async (message) => {
    if (message.content.startsWith('lev')) {
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
        return message.reply({
          content: 'You do not have permission to use this command!',
         
        });
      }
      const ment = new MessageSelectMenu()
      .setCustomId('hope')
      .setPlaceholder('nothing selected')
      .setMaxValues(1)
      .setMinValues(1)
      .addOptions(optionss)


    const row = new MessageActionRow()
      .addComponents(ment)
  
        message.channel.send({
        embeds: [new MessageEmbed().setDescription(`*توسط تلقائى*`).setThumbnail(message.guild.iconURL({dynamic : true})).setFooter({text : `نظام توسط` , value : `${message.guild.name}`})],
        components: [row]
      });
    }
  });
  
  
  

  const counter = require('./models/counter.js');
  
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  if (interaction.customId === 'hope') {
    let selectedOption = interaction.values[0];

    if (selectedOption === 'voice') {
      try {
        const ticketNumber = (
          await counter.findOneAndUpdate(
            { id: interaction.guild.id },
            { $inc: { count: 1 } },
            { upsert: true, new: true }
          )
        ).count;
        const category = config.cat;

        const channelName = `ticket-${ticketNumber}`;

        const channel = await interaction.guild.channels.create(channelName, {
          type: 'GUILD_TEXT',
          parent: category,
          permissionOverwrites: [
            {
              id: interaction.guild.id,
              deny: ['VIEW_CHANNEL'],
            },
            {
              id: interaction.user.id,
              allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
            },
          ],
        });

        const close = new MessageButton()
          .setCustomId('closeart')
          .setLabel('close')
          .setStyle('SUCCESS');

        const butdta = new MessageButton()
          .setCustomId('tlal')
          .setLabel('continue')
          .setStyle('DANGER');




        const uudta = new MessageActionRow().addComponents(butdta, close);

        channel.send({
          content: `<@${interaction.user.id}>`,
          embeds: [
            new MessageEmbed().setDescription(
`لاكمال عملية التوسط يرجى الصغط على الزر الاسفل
وتقم بتعبئة البيانات التي ستظهر بدقة جيدة`
            ),
          ],
          components: [uudta],
        });

        
        await interaction.reply({
          content: `*✔ Ticket Created <#${channel.id}>*`,
          ephemeral: true,
        });
      } catch (error) {
        console.error(error);
      }
    }

    if (selectedOption === 'reset') {
      selectedOption = null;
      optionss.forEach((option) => {
        option.selected = false;
      });
      await interaction.reply({
        content: `**Selection reset. Please choose an option from the menu.**`,
        ephemeral: true,
      });
    } else {
      optionss.forEach((option) => {
        if (option.value === selectedOption) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      });
    }
  }
});
const tax = require('probot-taxs')

client.on('interactionCreate', async (interaction) => {
  try {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'tlal') {


      const modalal = new Modal().setCustomId('myModalal').setTitle('My Modal');

      const tokennnnl = new TextInputComponent()
        .setCustomId('tokenlal')
        .setLabel(`ايدي صاحب السلعة`)
        .setPlaceholder('ضع ايدي صاحب السلعة هنا')
        .setStyle('SHORT');
        const tokennnn2 = new TextInputComponent()
        .setCustomId('tokenla3')
        .setLabel(`ايدى صاحب الكريديت`)
        .setPlaceholder('ضع ايدى صاحب الكريديت')
        .setStyle('SHORT');
      const prefixxxxl = new TextInputComponent()
        .setCustomId('prefixlal')
        .setLabel(`السلعة`)
        .setStyle('SHORT');

      const prefixxxxl2 = new TextInputComponent()
        .setCustomId('prefixlal1')
        .setLabel(`السعر`)
        .setStyle('SHORT');

      const firstActionRowwwwl = new MessageActionRow().addComponents(tokennnnl);
      const firstActionRowwww5 = new MessageActionRow().addComponents(tokennnn2);
      const secondActionRowwwwl = new MessageActionRow().addComponents(prefixxxxl);
      const secondActionRowwwwl2 = new MessageActionRow().addComponents(prefixxxxl2);
      modalal.addComponents(firstActionRowwwwl,  firstActionRowwww5 , secondActionRowwwwl, secondActionRowwwwl2);

      await interaction.showModal(modalal);




    }
  } catch (error) {
    console.error(error);

    await interaction.reply({
      content: 'An error occurred while processing your request.',
      ephemeral: true,
    });
  }
});





  


client.on('interactionCreate', async (interaction) => {
  if (interaction.isModalSubmit() && interaction.customId === 'myModalal') {
    try {
      const tokennno = interaction.fields.getTextInputValue('tokenlal'); // item
      const tokennno1 = interaction.fields.getTextInputValue('tokenla3'); // credit 
      const prefixxxo = interaction.fields.getTextInputValue('prefixlal'); // item
      const prefixxxo1 = interaction.fields.getTextInputValue('prefixlal1'); // price

      const formData = new FormData({
        guildId: interaction.guild.id,
        userId: tokennno1,
        token: tokennno,
        item: prefixxxo,
        price: prefixxxo1,
        channelId: interaction.channel.id // Save channel ID here
      });

      await formData.save();

      const channel = interaction.guild.channels.cache.get(interaction.channel.id);

      if (channel) {
        await channel.permissionOverwrites.create(tokennno, {
          VIEW_CHANNEL: true,
          SEND_MESSAGES: true,
        });

        await channel.permissionOverwrites.create(tokennno1, {
          VIEW_CHANNEL: true,
          SEND_MESSAGES: true,
        });

        await interaction.message.edit({
          components: [
            new MessageActionRow().addComponents(
              new MessageButton()
                .setCustomId('tlal')
                .setLabel('تم')
                .setStyle('PRIMARY')
                .setDisabled(true),
              new MessageButton()
                .setCustomId('closeart')
                .setLabel('لقفل الروم')
                .setStyle('DANGER')
                .setDisabled(false)
            ),
          ],
        });

        // Wait for 5 minutes (300000 milliseconds)
        setTimeout(async () => {
          const close = new MessageButton()
            .setCustomId('se1')
            .setLabel('نعم')
            .setStyle('SUCCESS');

          const butdta = new MessageButton()
            .setCustomId('se2')
            .setLabel('لا')
            .setStyle('DANGER');

          const uudta = new MessageActionRow().addComponents(butdta, close);

          const yy = await formData.findOne({ channelId: interaction.channel.id });
          const g1 = interaction.guild.members.cache.get(yy.userId);
          const g2 = interaction.guild.members.cache.get(yy.token);

          await g1.send({ content: `هل تم عملية التوسط بنجاح ام لا`, components: [uudta] });
          await g2.send({ content: `هل تم عملية التوسط بنجاح ام لا`, components: [uudta] });

        }, 300000); // 300000 milliseconds = 5 minutes

        const bank = config.bankId;
        let taxs = tax.tax(prefixxxo1, true);
        await interaction.reply({ content: `done`, ephemeral: true });

        await interaction.channel.send({
          embeds: [new MessageEmbed()
            .addFields({ name: `صاحب الكريديت هو`, value: `<@${tokennno1}>`, inline: true })
            .addFields({ name: `صاحب السلعة هو`, value: `<@${tokennno}>`, inline: true })
            .addFields({ name: `السلعة هى`, value: `${prefixxxo}`, inline: true })
            .addFields({ name: `سعر السلعة ${prefixxxo}`, value: `${prefixxxo1}`, inline: true })
            .setTitle('استمارة التى تم ملأها')
          ]
        });

        await interaction.channel.send({ content: `<@${tokennno}> <@${tokennno1}>  تم اضافة الشخص للتكت` });

        await interaction.channel.send({
          content: `من فضلك <@${tokennno1}> قم بنسخ الامر والتحويل \n  c ${bank} ${taxs.tax}`,
        });

      } else {
        throw new Error('Channel not found');
      }
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: '** توكن حسابك خطأ ❌ انت يجب ان تدخل توكن صحيح لحسابك || لو مش عارف تجيب توكن حسابك ازاى اكتب كلمة  (token)  **',
        ephemeral: true,
      });
    }
  }

  if (interaction.isButton()) {
    const formData = await FormData.findOne({ channelId: interaction.message.channel.id });

    if (!formData) return;

    const channel = interaction.guild.channels.cache.get(formData.channelId);

    if (interaction.customId === 'se1') {
      await channel.send('تمت التوسط بنجاح');
      await interaction.reply({ content: 'تمت التوسط بنجاح', ephemeral: true });
    } else if (interaction.customId === 'se2') {
      await channel.send(`ما هي المشكله الذي واجهتك في عمليه التوسط <@${interaction.user.id}>`);
      await interaction.reply({ content: 'ما هي المشكله الذي واجهتك في عمليه التوسط', ephemeral: true });
    }
  }
});
  
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;
  
    if (interaction.customId === 'closeart') {
      await interaction.channel.delete();
    }
  });
  
  const buttonCooldown = 10000; // 1 minute cooldown
  const buttonTimestamps = new Map();
  
  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
  
    const tt = await FormData.findOne({ channelId: message.channel.id }); // Find using channelId
  
    if (!tt) return;
  
    let price_without = `${tt.price}`; // boost tool
    let ownerId = config.bankId;
    const probotId = `282859044593598464`;
  
    let trans_msg = `**:moneybag: | ${message.author.username}, has transferred \`$${price_without}\` to <@!${ownerId}> **`;
    let collect2 = await message.channel.awaitMessages({
      filter: mm => mm.author.id === probotId && mm.content === trans_msg,
      max: 1,
      time: 0
    }).catch(() => 0);
  
    collect2 = collect2.first();
    if (!collect2) return;
    if (collect2.content != trans_msg) return;
  
    const lastTimestamp = buttonTimestamps.get(message.author.id) || 0;
    const now = Date.now();
  
    if (now - lastTimestamp >= buttonCooldown) {
      const butt = new MessageButton()
        .setCustomId('kilal')
        .setLabel("نعم")
        .setStyle('DANGER');
      const but1 = new MessageButton()
        .setCustomId('kilal1')
        .setLabel("لا")
        .setStyle('DANGER');
      const roww = new MessageActionRow()
        .addComponents(butt, but1);
  
      message.channel.send({
        embeds: [new MessageEmbed().setDescription(`** اذا قام صاحب الكريديت بتحويل الكريديت للبنك \n فقط صاحب السلعة يضغط نعم اذا حول \n او يضغط لا اذا لم يحول'**`)],
        components: [roww]
      });
  
      buttonTimestamps.set(message.author.id, now);
    }
  });
  
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;
  
    if (interaction.customId === 'kilal1') {
      const tt = await FormData.findOne({ channelId: interaction.channel.id });
  
      if (!tt) {
        console.log('No document found with channelId:', interaction.channel.id);
        return interaction.reply({
          content: 'انت لا تستطيع الضغط على هذا الزر.',
          ephemeral: true,
        });
      }
  
      interaction.reply({
        content: `<@${tt.userId}> من فضلك قم بتحويل الكريديت اولا للبنك`,
      });
  
      await interaction.update({
        components: interaction.message.components.map(row => {
          return new MessageActionRow().addComponents(
            row.components.map(button => {
              button.setDisabled(true);
              return button;
            })
          );
        })
      });
    }
  
    if (interaction.customId === 'kilal') {
      const tt = await FormData.findOne({ channelId: interaction.channel.id });
  
      if (!tt) {
        console.log('No document found with channelId:', interaction.channel.id);
        return interaction.reply({
          content: 'Document not found for this channel.',
          ephemeral: true,
        });
      }
  
      if (interaction.user.id !== tt.token) {
        console.log('User ID does not match the token in the document.');
        return interaction.reply({
          content: 'انت لا تستطيع الضغط على هذا الزر.',
          ephemeral: true,
        });
      }
  
      const butt = new MessageButton()
        .setCustomId(`ki_${tt._id}`)
        .setLabel("نعم")
        .setStyle('DANGER');
      const but1 = new MessageButton()
        .setCustomId(`ki1_${tt._id}`)
        .setLabel("لا")
        .setStyle('DANGER');
      const roww = new MessageActionRow()
        .addComponents(butt, but1);
  
      const userIdFromDb = tt.userId;
      const userToMessage = interaction.guild.members.cache.get(userIdFromDb);
  
      if (!userToMessage) {
        console.log('No user found with userId:', userIdFromDb);
        return interaction.reply({
          content: 'User not found in the guild.',
          ephemeral: true,
        });
      }
  
      userToMessage.send({
        content: `لو استلمت السلعة من الشخص قم بالضغط على زر نعم بالاسفل`,
        components: [roww],
      });
  
      interaction.reply({
        content: ` <@${tt.token}> من فضلك قم بارسال السلعة خاصتك فى خاص <@${userIdFromDb}>`,
      });
  
      await interaction.update({
        components: interaction.message.components.map(row => {
          return new MessageActionRow().addComponents(
            row.components.map(button => {
              button.setDisabled(true);
              return button;
            })
          );
        })
      });
    }

    if (interaction.customId.startsWith('ki_')) {
      const documentId = interaction.customId.split('_')[1];
      const tt = await FormData.findById(documentId);
  
      if (!tt) {
        return interaction.reply({
          content: 'انت لا تستطيع الضغط على هذا الزر.',
          ephemeral: true,
        });
      }


/////////// Ahmed Sn Is number one in this fuckin planet are you agree hhhhhhhh //////////

      // Check if the user has permission to use the button
      if (interaction.user.id !== tt.userId) {
        console.log('User ID does not match the userId in the document.');
        return interaction.reply({
          content: 'انت لا تستطيع الضغط على هذا الزر.',
          ephemeral: true,
        });
      }

      // Fetch the guild and channel using the stored channel ID
      const guild = await client.guilds.fetch(tt.guildId); // Make sure you store the guild ID in the database
      const channel = guild.channels.cache.get(tt.channelId);

      if (!channel) {
        throw new Error('Channel not found');
      }

      await channel.send({
        content: `تم ارسال السلعة بنجاح \n <@${tt.token}> من فضلك انتظر حتى يتم تحويل الكريديت لك من قبل البنك`,
      });

      interaction.reply({
        content: 'تم ارسال السلعة',
        ephemeral: true,
      });





    }
    // Handle the 'ki1' button interaction
    if (interaction.customId.startsWith('ki1_')) {
      const documentId = interaction.customId.split('_')[1];
      const tt = await FormData.findById(documentId);
  
      if (!tt) {
        return interaction.reply({
          content: 'انت لا تستطيع الضغط على هذا الزر.',
          ephemeral: true,
        });
      }
  
      try {
        const guild = await client.guilds.fetch(tt.guildId);
        const channel = guild.channels.cache.get(tt.channelId);
  
        if (!channel) {
          throw new Error('Channel not found');
        }
  
        await channel.send({
          content: `<@${tt.token}> من فضلك قم بارسال السلعة ل <@${tt.userId}> لاتمام عملية ارسال الكريديت لك`,
        });
  
        interaction.reply({
          content: `تم ارسال لروم <#${tt.channelId}> انه لم يتم ارسال السلعة لك`,
          ephemeral: true,
        });
  
        await interaction.update({
          components: interaction.message.components.map(row => {
            return new MessageActionRow().addComponents(
              row.components.map(button => {
                button.setDisabled(true);
                return button;
              })
            );
          })
        });
      } catch (error) {
        console.error(error);
        interaction.reply({
          content: 'حدث خطأ أثناء محاولة إرسال الرسالة إلى القناة.',
          ephemeral: true,
        });
      }
    }
});


client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName, options, channel, guild } = interaction;

  if (commandName === 'add-user') {
      const user = options.getUser('user');
      if (!user) return interaction.reply({ content: 'User not found', ephemeral: true });

      const member = guild.members.cache.get(user.id);
      if (!member) return interaction.reply({ content: 'Member not found in the server', ephemeral: true });

      if (!channel.isText()) return interaction.reply({ content: 'This command can only be used in a text channel', ephemeral: true });

      await channel.permissionOverwrites.create(member, {
          VIEW_CHANNEL: true,
          SEND_MESSAGES: true
      });

      interaction.reply({ content: `${user.tag} has been added to the ticket channel`, ephemeral: true });
  }

  if (commandName === 'end') {
      interaction.reply({ content: 'Ending mediation and closing the ticket channel in 5 seconds...', ephemeral: true });

      setTimeout(async () => {
          await channel.delete();
          const formData = await FormData.findOne({ channelId: channel.id });
          if (formData) {
              const user1 = guild.members.cache.get(formData.userId);
              const user2 = guild.members.cache.get(formData.token);

              if (user1) {
                  user1.send({ embeds: [new MessageEmbed()
                    .addFields({ name: `صاحب الكريديت هو`, value: `${user1}`, inline: true })
                    .addFields({ name: `صاحب السلعة هو`, value: `${user2}`, inline: true })
                    .addFields({ name: `السلعة هى`, value: `${formData.item}`, inline: true })
                    .addFields({ name: `سعر السلعة ${formData.item}`, value: `${formData.price}`, inline: true })
                    .setTitle('تم انهاء التوسط')
                  ]});
              }
              if (user2) {
                  user2.send({ embeds: [new MessageEmbed()
                    .addFields({ name: `صاحب الكريديت هو`, value: `${user1}`, inline: true })
                    .addFields({ name: `صاحب السلعة هو`, value: `${user2}`, inline: true })
                    .addFields({ name: `السلعة هى`, value: `${formData.item}`, inline: true })
                    .addFields({ name: `سعر السلعة ${formData.item}`, value: `${formData.price}`, inline: true })
                    .setTitle('تم انهاء التوسط')
                  ]});
              }
          }
      }, 5000);
  }
});


client.login("");///