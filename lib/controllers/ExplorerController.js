const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

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
        const result = {score: parseInt(number), trick: validation}
        return result;
    }
}

module.exports = ExplorerController;