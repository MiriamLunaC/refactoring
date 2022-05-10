const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers.length)

//console.log(ExplorerService.filterByMission(explorers, "node"));
ExplorerService.filterByMission(explorers, "node");
//console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
//console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));
ExplorerService.getExplorersUsernamesByMission(explorers, "node");


const explorer1 = {name: "Explorer1", score: 1};
FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3};
FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5};
FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15};
FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
