const express = require('express')
const router = express.Router();
const {GitHubController}= require('../../controllers/github/GitHub.controller')

router.get('/google', async (req, res)=> {
    try {
        const topTenGoogle= new GitHubController();
        res.status(200).send(await topTenGoogle.searchTopTenGoogle())
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports= router