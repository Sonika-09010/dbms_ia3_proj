const express = require("express");

const {
    summarize,
    sessionRecommendation,
    reviewerRecommendation
} = require("../controllers/aiController");

const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
    "/summarize",
    authenticateToken,
    summarize
);

router.post(
    "/session-recommendation",
    authenticateToken,
    sessionRecommendation
);

router.post(
    "/reviewer-recommendation",
    authenticateToken,
    reviewerRecommendation
);

module.exports = router;