import { response,  request } from "express"; // solo para tener el tipado

export const usersGet = ( req = request, res = response)=>{
    
    const { nombre, apikey, page, limit } = req.query;
    res.json({
        msg: 'get, API -  controller',
        nombre,
        apikey, 
        page, 
        limit 
    });
}

export const usersPut = ( req, res = response)=>{

    const body = req.body;
    console.log(body);
    
    const id  = req.params.id;

    console.log(id);
    

    res.json({
        msg: 'put, API -  controller',
        body,
        id
    });
}

export const usersPost = ( req, res = response)=>{
    res.status(201).json({
        msg: 'post, API -  controller'
    });
}

export const usersDelete = ( req, res = response)=>{
    res.json({
        msg: 'delete, API -  controller'
    });
}
