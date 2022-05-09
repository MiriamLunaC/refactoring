const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");

const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers.length)

//console.log(ExplorerService.filterByMission(explorers, "node"));
ExplorerService.filterByMission(explorers, "node");
//console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
//console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));
ExplorerService.getExplorersUsernamesByMission(explorers, "node");
