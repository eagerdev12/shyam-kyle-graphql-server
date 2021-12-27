const mediaRepo = require('../../db/repo/media-repo');

module.exports = {
    titles: async (req, res) => {
        try {
            const titles = mediaRepo().getTitles();
            res.status(200).json({
                success: true,
                data: titles
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            });
        }
    }
}