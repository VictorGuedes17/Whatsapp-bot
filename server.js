// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log("bateu aqui")
    console.log(erro);
  });

function start(client) {
  console.log("bateu aqui")
  sendMessage(client);
  // client.onMessage((message) => {
  //   if (message.body === 'Oi' && message.isGroupMsg === false) {
  //     client
  //       .sendText(message.from, 'Bateu no servidor - 🕷')
  //       .then((result) => {
  //         console.log("aqui 1.1: ", message.from)
  //         console.log('Result: ', result); //return object success
  //       })
  //       .catch((erro) => {
  //         console.error('Error when sending: ', erro); //return object error
  //       });
  //   }
  // });
}

async function sendMessage(client){
  //553194509691@c.us -- padrao de contato
  console.log("aqui 2")
  await client
  .sendText('contato', '👋 Hello World - Iniciando app!')
  .then((result) => {
    console.log('Result da msg: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });
}