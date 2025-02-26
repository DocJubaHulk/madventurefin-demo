const express = require("express");
const router = express.Router();
const db = require("../db/database");

// Add funding request
router.post("/request", (req, res) => {
    const { projectId, milestoneId, fundingAmount, innovatorId, walletId, fundingMethod } = req.body;
    const sql = `INSERT INTO funding (projectId, milestoneId, fundingAmount, innovatorId, walletId, fundingMethod, fundsReleased, fundsRemaining, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'Approved')`;
    
    db.run(sql, [projectId, milestoneId, fundingAmount, innovatorId, walletId, fundingMethod, fundingAmount, 0], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID, message: "Funding request approved" });
    });
});

// Get all funding requests
router.get("/all", (req, res) => {
    db.all("SELECT * FROM simulateFunding", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

module.exports = router;
