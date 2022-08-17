const { DataTypes } = require("sequelize")

module.exports = (sequelize,Sequelize) => {
    const PostMedia = sequelize.define("post_media",{
        media_id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        media_url: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: 'Please upload a media.'
            }
        }
    });
    return PostMedia;
}