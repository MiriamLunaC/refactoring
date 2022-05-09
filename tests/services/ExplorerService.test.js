const ExplorerService = require("../../lib/services/ExplorerService");

describe("Tests para ExplorerService", ()=>{
    test("Requerimiento 1: Calcular todos los explorers en una misión", ()=>{
        const explorers = [{mission:"node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });  

    test("Requerimiento 2: Obtener la cantidad de explorers que están en node.",()=>{
        const explorers = [{mission: "node"}];
        const explorersInNodeLength = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNodeLength).toBe(1);
    });

    test("Requerimiento 3: Obtener la lista de usuarios de github de los explorers que están en node.", ()=>{
        const explorers = [{mission: "node", githubUsername: "username"}];
        const explorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
        expect(explorersInNode).toContain("username");
    });
});