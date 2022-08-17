const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("posts", {
        post_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        caption: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: {
                    args: [2200],
                    msg: "Caption cannot be more than 2200 characters."
                }
            }
        },
        location: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    });
    return Post;
}