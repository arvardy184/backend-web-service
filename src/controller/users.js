const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [row] = await UsersModel.getAllUsers();
    
    res.json({
        message: 'GET All Users Success',
        data: row
    })
        } catch (error) {
        res.status(500).json({
            message: 'GET All Users Failed',
            serverMessage: error,
        })
    }
    
}

const createNewUsers = async (req, res) => {
    // console.log(req.body);
    const {body} = req;
    if (!body.email || !body.email || !body.address) { 
        return res.status(400).json({
            message: 'Email or Address is required',
            data: null,
        })
    }
    
    try {
        await UsersModel.createNewUsers(body);
        res.status(201).json({
            message: 'CREATE New Users Success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'CREATE New Users Failed',
            serverMessage: error,
        })
    }
   
}

const updateUsers = async(req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await UsersModel.UpdateUsers(id, body);
        res.json({
            message: 'UPDATE Users Success',
            data: {
                id: id,
                ...body

            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'CREATE New Users Failed',
            serverMessage: error,
        })
    }
    console.log('id: ', id);
    
}

const deleteUsers = async (req, res) => {
    const {id} = req.params;
    try {
        await UsersModel.DeleteUsers(id);
        res.json({
            message: 'DELETE Users Success',
            data: null
        })
    }
    catch (error) {
        res.status(500).json({
            message: 'DELETE Users Failed',
            serverMessage: error,
        })
    }
    console.log('id: ', id);
    
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers
}