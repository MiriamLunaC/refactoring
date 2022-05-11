const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");
const TelegramBot = require("node-telegram-bot-api");
require('dotenv').config();

class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorersByMission;
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersByMission;
    }

    static applyValidationInNumber(number){
        const validation = FizzbuzzService.applyValidationInNumber(number);
        const result = {score: parseInt(number), trick: validation};
        return result;
    }

    static applyBot(){
        const bot = new TelegramBot(process.env.TOKEN, {polling: true});

        bot.onText(/\/echo (.+)/, (msg, match) => {

            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"

            bot.sendMessage(chatId, resp);
        });

        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);
            
            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = ExplorerController.applyValidationInNumber(numberToApplyFb); 
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick.trick}`;
                bot.sendMessage(chatId, responseBot);
            } else if(msg.text === "node" || msg.text === "java"){
                const explorers = ExplorerController.getExplorersByMission(msg.text);
                const explorersName = explorers.map((explorer)=> explorer.name);
                bot.sendMessage(chatId, explorersName.toString().replaceAll(",", "\n"));
            } else {
                bot.sendMessage(chatId, "Envía un número válido");
            }

        });
    }
}

module.exports = ExplorerController;