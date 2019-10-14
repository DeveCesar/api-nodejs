import Task from '../models/Task';

export async function getTask(req, res) {
    try {
        const taks = await Task.findAll({
            attributes: ['id', 'nombre', 'realizado', 'projectid'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            taks
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Hubo un error al obtener la informacion...",
            data: {}
        })
    }

}

export async function getOneTask(req, res) {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: {
                id: id
            }
        });
        res.json({
            data: task
        })
    } catch (error) {
        return res.status(500).json({
            message: "Hubo un error al intentar obtener tu tarea",
            data: {}
        })
    }
}

export async function createTask(req, res) {
    const { nombre, realizado, projectid } = req.body;
    try {
        const newTask = await Task.create({
            nombre,
            realizado,
            projectid
        }, {
            fields: ['nombre', 'realizado', 'projectid']
        });
        res.json({
            message: "Nueva tarea agregada",
            data: newTask
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Hubo un error al crear tu tarea..",
            data: {}
        })
    }
}

export async function deleteTask(req, res) {
    try {
        const { id } = req.params;
        await Task.destroy({
            where: {
                id
            }
        });
        res.json({
            message: "Tarea eliminada satisfactoriamente",
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Hubo un error al intentar eliminar tu tarea",
            data: {}
        })
    }
}

export async function updateTask(req, res) {
    try {
        const { id } = req.params;
        const { nombre, realizado, projectid } = req.body;

        const task = await Task.findOne({
            attributes: ['id', 'nombre', 'realizado', 'projectid'],
            where: {
                id
            }
        });
        const updateTask = await Task.update({
            nombre,
            realizado,
            projectid
        }, {
            where: { id }
        });
        res.json({
            message: 'Tarea actualizada satisfactoriamente',
            updateTask
        })
    } catch (error) {
        console.log(e);
        return res.status(500).json({
            message: "Hubo un error al intentar actualizar tu tarea",
            data: {}
        })
    }

}

export async function getTaskByProject(req, res) {
    const { projectid } = req.params;
    const task = await Task.findAll({
        attributes: ['id', 'projectid', 'realizado', 'nombre'],
        where: { projectid }
    });
    res.json({
        task
    })
}