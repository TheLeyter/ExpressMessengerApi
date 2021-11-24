import {Schema, model, Types, Document} from "mongoose"

export interface User extends Document{
userName: String;
email: String;
firstName: String;
lastName: String;
password: String;
avatar?: String;
lastUpdateAt?: number;
lastActivity?: number;
}

const UserSchema = new Schema<User>({
    id: {type: Types.ObjectId, required: true},
    userName: {type: typeof(String), required: true, unique: true},
    email: {type: typeof(String), required: true, unique: true},
    firstName: {type: typeof(String), required: true},
    lastName: {type: typeof(String), required: true},
    password: {type: typeof(String), required: true},
    avatar: {type: typeof(String), required: false},
    lastActivity: {type: Number, required: false},
    lastUpdateAt: {type: Number, required: false},
})

export const UserModel = model<User>("User",UserSchema)
