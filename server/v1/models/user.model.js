const { DataTypes } = require("sequelize")

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please enter username.",
                }
            }
        },
        email: {
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please enter email.",
                }
            }
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Password cannot be null."
                }
            }
        },
        dob: {
            type: DataTypes.DATEONLY,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        is_private: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

    })
    return User
}

