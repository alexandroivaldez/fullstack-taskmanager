const db = require('./database');

const seed = () => {
    db.query(`
        CREATE TABLE tasks (
            id SERIAL PRIMARY KEY,
            name VARCHAR(30),
            date DATE,
            description VARCHAR(400),
            complete BOOLEAN
        );
    `).then(() => {
        console.log('db was seeded!');
    });
}

module.exports = seed;