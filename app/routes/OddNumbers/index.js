const express = require('express');
const { OddNumbersController } = require('../../controllers/OddNumbers/OddNumbers.controller');
const router = express.Router();

router.get('/:number', async (req, res)=> {
    const number= req.params.number;
    try {
        let oddNumbers= new OddNumbersController()
        res.status(200).send(oddNumbers.calculate(number))
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports= router