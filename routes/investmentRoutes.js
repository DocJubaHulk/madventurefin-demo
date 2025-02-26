const express = require("express");
const router = express.Router();
const db = require("../db/database");

// Add new investment
router.post("/add", (req, res) => {
    const { investorId, investmentAmount, investmentCategory, walletId, expectedReturns } = req.body;
    const sql = `INSERT INTO investments (investorId, investmentAmount, investmentCategory, walletId, expectedReturns, investmentStatus) VALUES (?, ?, ?, ?, ?, 'Pending')`;
    
    db.run(sql, [investorId, investmentAmount, investmentCategory, walletId, expectedReturns], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID, message: "Investment added successfully" });
    });
});

// Get all investments
router.get("/all", (req, res) => {
    db.all("SELECT * FROM simulateInvestment", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

module.exports = router;

