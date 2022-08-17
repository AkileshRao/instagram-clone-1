const { DB, USER, PASSWORD, HOST, dialect, pool } = require("../config/db_config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: dialect,
    operatorsAliases: false,
    pool: {
        max: pool.max,
        min: pool.min,
        acquire: pool.acquire,
        idle: pool.idle
    }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./user.model")(sequelize, Sequelize);
db.posts = require("./post.model")(sequelize, Sequelize);
db.postMedia = require("./postMedia.model")(sequelize,Sequelize);

// User & Post
db.users.hasMany(db.posts);
db.posts.belongsTo(db.users, {
    foreignKey: {
        name: 'user_id',
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    }
})

//Post & Post Media
db.posts.hasMany(db.postMedia,{foreignKey:'post_id'});
db.postMedia.belongsTo(db.posts, {
    foreignKey: {
        name: 'post_id',
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    }
})

module.exports = db;