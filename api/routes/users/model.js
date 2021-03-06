const db = require("../../../database/dbConfig.js");

module.exports = {
    findById,
    add,
    findBy,
    update
};



function findBy(filter) {
    return db("users").where(filter)
}


function findById(id) {
    return db("users")
        .where({ id })
        .first();
}

async function add(user) {
    const [id] = await db("users").insert(user);
    return findById(id);
}

function update(id, changes) {
    return db("users")
        .where({ id })
        .update(changes)
        .then(count => {
            if (count > 0) {
                return findById(id);
            } else {
                return null;
            }
        });
}