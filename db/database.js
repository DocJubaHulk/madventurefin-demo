const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.sqlite", (err) => {
    if (err) console.error("❌ Database connection error:", err.message);
    else console.log("✅ Connected to SQLite database");
});

// Create Tables if not exist
db.serialize(() => {
    // Simulated Investments Table
    db.run(`CREATE TABLE IF NOT EXISTS simulateInvestment (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        investorId TEXT NOT NULL,
        investmentAmount REAL NOT NULL,
        investmentCategory TEXT NOT NULL,
        investmentAllocation TEXT,
        investment_timestamp TEXT DEFAULT CURRENT_TIMESTAMP,
        SPV_reference TEXT NOT NULL,
        transactionId TEXT NOT NULL UNIQUE,
        investmentStatus TEXT DEFAULT 'Pending',
        walletId TEXT,
        tokenAmount REAL,
        blockchainReference TEXT,
        expectedReturns REAL,
        investmentConfirmed BOOLEAN DEFAULT 0
    )`);

    // Simulated Funding Table
    db.run(`CREATE TABLE IF NOT EXISTS simulateFunding (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        projectId TEXT NOT NULL,
        milestoneId TEXT,
        fundingAmount REAL NOT NULL,
        innovatorId TEXT NOT NULL,
        walletId TEXT NOT NULL,
        fundingMethod TEXT NOT NULL,
        fundsReleased REAL DEFAULT 0,
        fundsRemaining REAL DEFAULT 0,
        funding_timestamp TEXT DEFAULT CURRENT_TIMESTAMP,
        status TEXT DEFAULT 'Approved',
        approvalStatus TEXT DEFAULT 'Success',
        milestoneApproved BOOLEAN DEFAULT 0
    )`);

    // Simulated Project Submission Table
    db.run(`CREATE TABLE IF NOT EXISTS demoprojectsubmission (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        projectId TEXT NOT NULL UNIQUE,
        InnovatorId TEXT NOT NULL,
        projectName TEXT NOT NULL,
        description TEXT NOT NULL,
        sdgAlignment TEXT NOT NULL,
        fundingAmount REAL NOT NULL,
        submissionStatus TEXT DEFAULT 'Pending',
        CREATEDTIME TEXT DEFAULT CURRENT_TIMESTAMP,
        MODIFIEDTIME TEXT DEFAULT CURRENT_TIMESTAMP
    )`);
});

module.exports = db;

