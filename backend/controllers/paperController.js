const submitPaper = async (req, res) => {
    try {
        const { title, abstract, paper_file } = req.body;

        if (!title || !abstract || !paper_file) {
            return res.status(400).json({
                message: "Title, abstract and paper file are required"
            });
        }

        res.status(201).json({
            message: "Paper submission received",
            submitted_by: req.user.user_id,
            paper: {
                title,
                abstract,
                paper_file
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Paper submission failed"
        });
    }
};

const getMyPapers = async (req, res) => {
    try {
        res.json({
            message: "Paper tracking endpoint",
            user_id: req.user.user_id
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch papers"
        });
    }
};

module.exports = {
    submitPaper,
    getMyPapers
};