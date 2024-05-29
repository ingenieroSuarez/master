"use strict";
require('dotenv').config();
const { GitHubService } = require("../../services/github/GitHub.service")

class GitHubController {
    constructor() {
        this._gitHubService = new GitHubService();
    }
    async searchTopTenGoogle(){
        const userNameGoogle = process.env.USER_NAME_GOOGLE;
        const amountRepos = process.env.AMOUNT_REPOS;
        return await this._gitHubService.searchRepos(userNameGoogle, amountRepos);
    }
}

module.exports= {
    GitHubController
}