import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Task from './task';

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    prioridad: {
        type: Sequelize.INTEGER
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    fecha: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
})

Project.hasMany(Task, { foreingKey: 'projectid', sourceKey: 'id' });
Task.belongsTo(Project, { foreingKey: 'projectid', sourceKey: 'id' });

export default Project;