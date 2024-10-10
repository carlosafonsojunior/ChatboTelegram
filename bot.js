const TelegramBot = require('node-telegram-bot-api');

// Substitua 'TELEGRAM_BOT_TOKEN' pelo token gerado pelo BotFather
const token = 'TELEGRAM_BOT_TOKEN';

// Cria uma instância do bot
const bot = new TelegramBot(token, {polling: true});

// Função para iniciar a conversa de suporte
const sendMainMenu = (chatId) => {
  bot.sendMessage(chatId, 'Bem-vindo ao Suporte! Como podemos ajudar?', {
    reply_markup: {
      keyboard: [
        ['📞 Suporte Técnico', '📦 Informações de Produto'],
        ['❓ Fale com um atendente']
      ],
      resize_keyboard: true,
      one_time_keyboard: true
    }
  });
};

// Comando '/start' para iniciar o chatbot
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  sendMainMenu(chatId);
});

// Lógica para tratar as opções do usuário
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase();  // Normaliza o texto para evitar problemas com maiúsculas/minúsculas

  if (text.includes('suporte técnico')) {
    bot.sendMessage(chatId, 'Você escolheu Suporte Técnico. Em que podemos ajudar?\n1. Problemas de conexão\n2. Erro no sistema\n3. Configuração');
  } 
  else if (text.includes('informações de produto')) {
    bot.sendMessage(chatId, 'Sobre qual produto você gostaria de saber mais?\n1. Produto A\n2. Produto B\n3. Produto C');
  }
  else if (text.includes('fale com um atendente')) {
    bot.sendMessage(chatId, 'Um de nossos atendentes entrará em contato em breve. Por favor, aguarde.');
  }
  else if (text.includes('problemas de conexão')) {
    bot.sendMessage(chatId, 'Para problemas de conexão, verifique se o seu roteador está funcionando corretamente e se a internet está ativa.');
  }
  else if (text.includes('erro no sistema')) {
    bot.sendMessage(chatId, 'Erro no sistema? Tente reiniciar o software. Se o problema persistir, entre em contato com o suporte técnico.');
  }
  else if (text.includes('configuração')) {
    bot.sendMessage(chatId, 'Precisa de ajuda com a configuração? Acesse nosso guia online ou siga as instruções enviadas para o seu e-mail.');
  }
  else if (text.includes('produto a')) {
    bot.sendMessage(chatId, 'Produto A é nosso software mais avançado, com recursos de AI e automação. Para saber mais, visite nosso site.');
  }
  else if (text.includes('produto b')) {
    bot.sendMessage(chatId, 'Produto B é ideal para pequenas empresas, oferecendo gerenciamento de tarefas e relatórios. Mais informações no nosso site.');
  }
  else if (text.includes('produto c')) {
    bot.sendMessage(chatId, 'Produto C é uma solução econômica, focada em startups. Oferece tudo o que você precisa para começar.');
  }
  else {
    // Resposta padrão caso a mensagem não corresponda a nenhuma opção
    bot.sendMessage(chatId, 'Desculpe, não entendi sua mensagem. Escolha uma das opções abaixo:', {
      reply_markup: {
        keyboard: [
          ['📞 Suporte Técnico', '📦 Informações de Produto'],
          ['❓ Fale com um atendente']
        ],
        resize_keyboard: true,
        one_time_keyboard: true
      }
    });
  }
});
