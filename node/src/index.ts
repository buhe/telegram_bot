import {$log} from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";
import {Server} from "./Server";
import {botStart} from "./bot"
async function bootstrap() {
  try {
    $log.debug("Start server...");
    const platform = await PlatformExpress.bootstrap(Server);

    await platform.listen();
    $log.debug("Server initialized");
  } catch (er) {
    $log.error(er);
  }
}

bootstrap();
botStart();

// Listen for any kind of message. There are different kinds of
// // messages.
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });