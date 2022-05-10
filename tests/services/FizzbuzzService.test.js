const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Tests para FizzbuzzService", ()=>{
    test("Explorer con score 1", ()=>{
        const explorer1 = {name: "Explorer1", score: 1};
        const result = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(result.trick).toBe(1);
    });  

    test("Explorer con score 3", ()=>{
        const explorer3 = {name: "Explorer3", score: 3};
        const result = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(result.trick).toBe("FIZZ");
    });

    test("Explorer con score 5", ()=>{
        const explorer5 = {name: "Explorer5", score: 5};
        const result = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(result.trick).toBe("BUZZ");
    });

    test("Explorer con score 15", ()=>{
        const explorer15 = {name: "Explorer15", score: 15};
        const result = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(result.trick).toBe("FIZZBUZZ");
    });

    test("Obtener la validación enviando un número (1)",()=>{
        const validation = FizzbuzzService.applyValidationInNumber(1);
        expect(validation).toBe(1);
    });

    test("Obtener la validación enviando un número (3)",()=>{
        const validation = FizzbuzzService.applyValidationInNumber(3);
        expect(validation).toBe("FIZZ");
    });

    test("Obtener la validación enviando un número (5)",()=>{
        const validation = FizzbuzzService.applyValidationInNumber(5);
        expect(validation).toBe("BUZZ");
    });

    test("Obtener la validación enviando un número (15)",()=>{
        const validation = FizzbuzzService.applyValidationInNumber(15);
        expect(validation).toBe("FIZZBUZZ");
    });

});