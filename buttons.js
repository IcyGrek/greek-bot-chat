module.exports = {
    repOptins: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Неуважительное поведение', callback_data:`badBeh`}, {text:'Реклама', callback_data:`addSpam`}, {text:'Непристойный контент или материал', callback_data:`badCount`}],
                [{text:'Обсуждение запрещённых тем', callback_data:`badTheme`}, {text:'Публикация личной информации', callback_data:`privateInf`},
                {text:'Спам', callback_data:`spamSh`}],
            ]
        })
    },

    eatOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Место поесть', callback_data:`${Math.floor(Math.random*2)}`}]
            ]
        })
    }
}