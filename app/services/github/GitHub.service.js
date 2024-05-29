
require('dotenv').config();
const axios = require('axios');

class GitHubService {
    async searchRepos(userName, amount){
        const urlGit = `${process.env.URL_BASE_GIT}${userName}/repos`
        try {
            const response = await axios.get(urlGit, {
                params: {
                    sort: 'stars',
                    per_page: amount
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('Error fetching data from GitHub');
        }
    }
}

module.exports= {
    GitHubService
}