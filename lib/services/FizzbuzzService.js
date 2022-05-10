class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        if(explorer.score%3 === 0 && explorer.score%5 === 0){
            explorer.trick = "FIZZBUZZ";
        }else if(explorer.score%3 === 0){
            explorer.trick = "FIZZ";
        }else if(explorer.score%5 === 0){
            explorer.trick = "BUZZ";
        }else{
            explorer.trick = explorer.score;
        }

        return explorer;
    }

    static applyValidationInNumber(number){
        let result = "";
        if(number%3 === 0 && number%5 === 0){
            result = "FIZZBUZZ";
        }else if(number%3 === 0){
            result = "FIZZ";
        }else if(number%5 === 0){
            result = "BUZZ";
        }else{
            result = parseInt(number);
        }
        return result;
    }
}

module.exports = FizzbuzzService;