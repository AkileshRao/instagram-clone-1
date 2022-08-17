const { DataTypes } = require("sequelize")
const bcrypt = require("bcrypt");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        user_id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
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
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        is_private: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    },{
        hooks :{
            beforeCreate: async (user) => {
             if (user.password) {
              const salt = await bcrypt.genSaltSync(10, 'a');
              user.password = bcrypt.hashSync(user.password, salt);
             }
            }
            // beforeUpdate:async (user) => {
            //  if (user.password) {
            //   const salt = await bcrypt.genSaltSync(10, 'a');
            //   user.password = bcrypt.hashSync(user.password, salt);
            //  }
            // }
        }
    })
    return User
}

