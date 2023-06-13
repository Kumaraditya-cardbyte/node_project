const Pool = require("pg").Pool;

function query(queryString, cbFunc) {
    const pool = new Pool({
        user: "postgres",
        host: "node-sample.cpks8xjrigyh.us-east-1.rds.amazonaws.com",
        database: "logrocket_oauth2",
        password: "postgres",
        ssl: { rejectUnauthorized: false },
        port: 5432
    });

    pool.query(queryString, (error, results) => {
        cbFunc(setResponse(error, results));
    });
}

function setResponse(error, results) {
    return {
        error: error,
        results: results ? results : null,
    };
}

module.exports = {
    query,
};
