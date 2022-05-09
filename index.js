const Reader = require("./lib/utils/Reader")
const ExplorerService = require("./lib/services/ExplorerService")

const explorers = Reader.readJsonFile("explorers.json")
//console.log(explorers)

//console.log(ExplorerService.filterByMission(explorers, "node"));
ExplorerService.filterByMission(explorers, "node");
//ExplorerService.getAmountOfExplorersByMission(explorers, "node");
//ExplorerService.getExplorersUsernamesByMission(explorers, "node");