"use strict";
exports.__esModule = true;
var AuthController_1 = require("./../controllers/AuthController");
var express_1 = require("express");
// import { AuthController } from "../controllers/AuthController";
var AuthRouter = (0, express_1.Router)();
var Controller = new AuthController_1.AuthController();
AuthRouter.post("/login");
AuthRouter.post("/register", Controller.register);
AuthRouter.get("/activate/:code");
AuthRouter.get("/logout");
exports["default"] = AuthRouter;