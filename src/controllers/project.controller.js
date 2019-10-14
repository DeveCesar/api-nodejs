import Project from '../models/Project';

export async function getProject(req, res) {
    try {
        const projects = await Project.findAll();
        res.json({
            data: projects
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Hubo un error al obtener la informacion...",
            data: {}
        })
    }

}

export async function getOneProject(req, res) {
    try {
        const { id } = req.params;
        const projects = await Project.findOne({
            where: {
                id: id
            }
        });
        res.json({
            data: projects
        })
    } catch (error) {
        return res.status(500).json({
            message: "Hubo un error al intentar obtener tu proyecto",
            data: {}
        })
    }
}

export async function createProject(req, res) {
    const { nombre, prioridad, descripcion, fecha } = req.body;
    try {
        let newProject = await Project.create({
            nombre,
            prioridad,
            descripcion,
            fecha
        }, {
            fields: ['nombre', 'prioridad', 'descripcion', 'fecha']
        });
        if (newProject) {
            return res.json({
                message: "Proyecto creado satisfactoriamente",
                data: newProject
            });
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Hubo un error al crear tu proyecto...",
            data: {}
        })
    }
}

export async function deleteProject(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Project.destroy({
            where: {
                id
            }
        });
        res.json({
            message: "Proyecto eliminado satisfactoriamente",
            count: deleteRowCount
        })
    } catch (error) {
        console.log(e);
        return res.status(500).json({
            message: "Hubo un error al intentar eliminar tu proyecto",
            data: {}
        })
    }
}

export async function updateProject(req, res) {
    try {
        const { id } = req.params;
        const { nombre, prioridad, descripcion, fecha } = req.body;

        const projects = await Project.findAll({
            attributes: ['id','nombre', 'prioridad', 'descripcion', 'fecha'],
            where: {
                id
            }
        });

        if (projects.length > 0) {
            projects.forEach(async project => {
                await project.update({
                    nombre,
                    prioridad,
                    descripcion,
                    fecha
                });
            })
        }
        return res.json({
            message: "Proyecto actualizado satisfactoriamente",
            data: projects
        })
    } catch (error) {
        console.log(e);
        return res.status(500).json({
            message: "Hubo un error al intentar actualizar tu proyecto",
            data: {}
        })
    }

}