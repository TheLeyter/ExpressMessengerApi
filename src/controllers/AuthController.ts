// import { User } from "src/models/User";
import express from "express";

export class AuthController{

    async register(request: express.Request, response: express.Response){
        try {
            response.json({name:"Vlad",userName:"Leyter"})
        } catch (error) {
            console.log(error)
        }
        
    }

}