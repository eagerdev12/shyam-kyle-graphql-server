const mediaRepo = require('../../../db/repo/media-repo');

const resolvers = {
    Query: {
        getTitles: () => {
            return mediaRepo().getTitles()
        }
    }
}

module.exports = resolvers