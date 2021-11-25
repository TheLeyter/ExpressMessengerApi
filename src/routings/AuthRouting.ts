import { AuthController } from './../controllers/AuthController';
import { Router } from "express";
// import { AuthController } from "../controllers/AuthController";

const AuthRouter: Router = Router()
const Controller = new AuthController()

AuthRouter.post("/login")
AuthRouter.post("/register",Controller.register)
AuthRouter.get("/activate/:code")
AuthRouter.get("/logout")

export default AuthRouter