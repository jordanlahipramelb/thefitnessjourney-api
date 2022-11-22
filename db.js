"use strict";

/** Database setup for fitness journey. */

/** When deploying to heroku, you must have postgresql add-on */

const { Client } = require("pg");

// Get database name
const { getDatabaseUri } = require("./config");

let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  db = new Client({
    connectionString: getDatabaseUri(),
  });
}

db.connect();

module.exports = db;
