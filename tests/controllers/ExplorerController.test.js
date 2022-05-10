const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerService", ()=>{
    test("Requerimiento 1: Calcular todos los explorers en una misión", ()=>{
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBeGreaterThan(0);
    });  

    test("Requerimiento 2: Obtener la cantidad de explorers que están en node.",()=>{
        const explorersInNodeLength = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorersInNodeLength).toBeGreaterThan(0);
    });

    test("Requerimiento 3: Obtener la lista de usuarios de github de los explorers que están en node.", ()=>{
        const explorersInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersInNode.length).toBeGreaterThan(0);
    });
});