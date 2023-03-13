const TelegramApi = require('node-telegram-bot-api');

const {repOptins} = require('./buttons.js')

const token = '6234908506:AAHM8DgKx9xZkf0n4V49j0_x4zA17UlwDY8';

const bot = new TelegramApi(token, {polling: true});


const start = () => {
    bot.setMyCommands([
        {command: '/start', description: `Начальное приветсвие`},
        {command: '/rules', description: `Правила чата Athens Chat`},
        {command: '/report', description: `Оставить жалобу на пользователя`},
        
    ])
    
    bot.on('message', async msg => {
        const text = msg.text; 
        const chatId = msg.chat.id;
        if(text === '/start'){
            await bot.sendSticker(chatId,`https://tlgrm.eu/_/stickers/f97/5a0/f975a071-9d6d-4ffd-9784-be68772d57d9/5.webp`);
            return bot.sendMessage(chatId,`Привет, ${msg.chat.first_name}. Чем могу помочь?`);
        }
        if(text === '/rules'){
            await bot.sendSticker(chatId,`https://tlgrm.eu/_/stickers/f97/5a0/f975a071-9d6d-4ffd-9784-be68772d57d9/4.webp`);
            return bot.sendMessage(chatId,`📜 Правила чата: 📜
    
            1. Будьте вежливы и уважительны друг к другу. Никаких  оскорблений, дискриминации или неуважительного поведения.
            
            2. Не используйте чат для продажи или рекламы товаров или услуг. Если вы хотите поделиться полезной информацией или советами, пожалуйста, делитесь ими, но не используйте чат для коммерческих целей.
            
            3. Не публикуйте непристойный контент или материалы, которые могут быть оскорбительными или провокационными.
            
            4. Не распространяйте мнения, которые могут привести к распрям или конфликтам. Обсуждение политики и религии не допускается.
            
            5. Не делитесь личной информацией в чате, используйте личные сообщения.
            
            6. Если вы обнаружили нарушение правил или какие-либо проблемы, пожалуйста, свяжитесь с администратором чата.
            
            7. Старайтесь сохранять чат в порядке. Пожалуйста, не спамьте и не создавайте множество постов подряд, чтобы избежать беспокойства других участников.
            
            ‼ За нарушение правил: ‼
    
            1. Предупреждение: Администраторы чата могут выдать предупреждение, указывая на нарушение правил и предупреждая участника о том, что такие действия больше не будут допускаться.
    
            2. Ограничения участия в чате: В случае нарушения правил администраторы могут ограничить доступ участника к чату на определенное время.
    
            3. Исключение из чата: В случае систематического нарушения правил администраторы могут решить исключить участника из чата.`);
        } 
        if(text === '/report'){
            await bot.sendSticker(chatId,`https://tlgrm.eu/_/stickers/f97/5a0/f975a071-9d6d-4ffd-9784-be68772d57d9/192/27.webp`);
            return bot.sendMessage(chatId,`Выбери категорию нарушения`, repOptins)
        }
        else {
            await bot.sendSticker(chatId,`https://tlgrm.eu/_/stickers/f97/5a0/f975a071-9d6d-4ffd-9784-be68772d57d9/12.webp`);
            return bot.sendMessage(chatId,`Я тебя не понимаю,${msg.chat.first_name}`);
        }
    })

    bot.on('callback_query', msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        switch(data){
            case 'badBeh':
                bot.sendMessage(chatId,`Отправьте ник и фотограцию, одним сообщением`);
                break;
            case 'addSpam':
                bot.sendMessage(chatId,`Отправьте ник и фотограцию, одним сообщением`);
                break;
            case 'badCount':
                bot.sendMessage(chatId,`Отправьте ник и фотограцию, одним сообщением`);
                break;
            case 'badTheme':
                bot.sendMessage(chatId,`Отправьте ник и фотограцию, одним сообщением`);
                break;
            case 'privateInf':
                bot.sendMessage(chatId,`Отправьте ник и фотограцию, одним сообщением`);
                break;
            case 'spamSh':
                bot.sendMessage(chatId,`Отправьте ник и фотограцию, одним сообщением`);
                break;
            case 1:
                
        }
    })
}

start();