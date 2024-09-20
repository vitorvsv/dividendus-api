const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   User.belongsToMany(models.Sector, {
    //     through: models.UserSector,
    //     foreignKey: 'userId',
    //     otherKey: 'sectorId',
    //     as: 'sectors',
    //     // onDelete: 'cascade',
    //     hooks: true,
    //   })
    // }
  }

  User.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    // active: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: true,
    // },
    // createdAt: {
    //   type: DataTypes.DATE,
    //   get() {
    //     return dayjs(this.getDataValue('createdAt')).utc().utcOffset('-3').format('YYYY-MM-DD HH:mm:ss')
    //   }
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   get() {
    //     return dayjs(this.getDataValue('updatedAt')).utc().utcOffset('-3').format('YYYY-MM-DD HH:mm:ss')
    //   }
    // },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
    scopes: {
      withPassword: {
        attributes: { },
      }
    }
  })

  return User
}