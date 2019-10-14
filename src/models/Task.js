import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Task = sequelize.define('taks', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    realizado: {
        type: Sequelize.BOOLEAN
    },
    projectid: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
})

export default Task;