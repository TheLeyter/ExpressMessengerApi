// import { User } from "src/models/User";
import express from "express";
import { User, UserModel } from "src/models/User";

export class AuthController{

    async register(request: express.Request<{}, {}, User>, response: express.Response){
        try {
            console.log(request.body)
            const data = request.body

            const user = new UserModel({
                userName: data.userName,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                password: data.password,
            })

            await user.save()

            response.status(225).json(data.password)
        } catch (error) {
            console.log(error)
        }
        
    }

}