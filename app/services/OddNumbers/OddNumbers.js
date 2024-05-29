class OddNumbersService {
    calculate(number){
        let numberInt= parseInt(number,10);
        let oddNumbers = [];
        for (let i = 1; i <= numberInt; i++) {
          if (i % 2 !== 0) {
            oddNumbers.push(i);
          }
        }
        console.log(oddNumbers);
        return oddNumbers;
    }
}

module.exports= {
    OddNumbersService
}