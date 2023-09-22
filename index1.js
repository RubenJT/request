const express = requiere('express')

const app = express()

app.get('/:user/:password',(req,res)=> {
    const {user,password} = req.params

    if (user== "Ruben" && password == '123' )
    {
        res.json({msg:"inicio de sesion exitoso"})
    return
    }
    res.status(404).json({msg:"Error de usuario o contrasena"})

})
app.get("/login", (req,res) =>{
    const {user , password}= req.query
    if(!user ||    !password){
        res.status(400).json({msg:"ypu need provide pssword o user"})
    return
    }
    if (user== "Ruben" && password == '123' )
    {
        res.json({msg:"inicio de sesion exitoso"})
    return
    }
    res.status(404).json({msg:"Error de usuario o contrasena"})

})
    

