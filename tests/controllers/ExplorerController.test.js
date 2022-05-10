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

    test("Obtener la validación enviando un número (1)",()=>{
        const validation = ExplorerController.applyValidationInNumber(1);
        expect(validation.trick).toBe(1);
    });

    test("Obtener la validación enviando un número (3)",()=>{
        const validation = ExplorerController.applyValidationInNumber(3);
        expect(validation.trick).toBe("FIZZ");
    });

    test("Obtener la validación enviando un número (5)",()=>{
        const validation = ExplorerController.applyValidationInNumber(5);
        expect(validation.trick).toBe("BUZZ");
    });

    test("Obtener la validación enviando un número (15)",()=>{
        const validation = ExplorerController.applyValidationInNumber(15);
        expect(validation.trick).toBe("FIZZBUZZ");
    });
});