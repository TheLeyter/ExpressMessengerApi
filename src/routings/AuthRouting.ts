import { AuthController } from './../controllers/AuthController';
import { Router } from "express";
// import { AuthController } from "../controllers/AuthController";

const AuthRouter: Router = Router()
const Controller = new AuthController()

AuthRouter.get("/login",Controller.register)
AuthRouter.post("/register")
AuthRouter.post("/activate/:code")
AuthRouter.post("/logout")

export default AuthRouter