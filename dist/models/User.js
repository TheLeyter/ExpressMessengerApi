"use strict";
exports.__esModule = true;
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    id: { type: mongoose_1.Types.ObjectId, required: true },
    userName: { type: typeof (String), required: true, unique: true },
    email: { type: typeof (String), required: true, unique: true },
    firstName: { type: typeof (String), required: true },
    lastName: { type: typeof (String), required: true },
    password: { type: typeof (String), required: true },
    avatar: { type: typeof (String), required: false },
    lastActivity: { type: Number, required: false },
    lastUpdateAt: { type: Number, required: false }
});
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);
