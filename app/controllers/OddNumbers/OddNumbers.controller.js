"use strict";
const { OddNumbersService } = require('../../services/OddNumbers/OddNumbers');

class OddNumbersController {
    constructor() {
        this._oddNumbersService = new OddNumbersService();
    }
    calculate(number){
        return this._oddNumbersService.calculate(number);
    }
}

module.exports= {
    OddNumbersController
}