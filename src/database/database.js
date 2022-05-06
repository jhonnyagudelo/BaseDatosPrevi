import { Sequelize } from 'sequelize';
import configEnvi from '../config';

export const sequelize = new Sequelize(
  configEnvi.database,
  configEnvi.user,
  configEnvi.password,
  {
    host: configEnvi.dbHost,
    dialect: configEnvi.dialect,
    port: configEnvi.dbPort,
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    logging: false,
    define: {
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    },
    dialectOptions: {
      useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: function (field, next) {
        // for reading from database
        if (field.type === 'DATETIME') {
          return field.string();
        }
        return next();
      },
    },
    timezone: '-05:00',
  }
);
