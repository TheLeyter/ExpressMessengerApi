import express from 'express'
import { connect } from 'mongoose';
import AuthRouter from "./routings/AuthRouting"

const app = express();
const port = 5000;

app.use(express.json())
app.use("/api/auth",AuthRouter)


async function main() {
    try {
        await connect("mongodb+srv://Admin:qazwsxedc@messengerdb.zi6v6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        app.listen(port, () => console.log(`Running on port ${port}`));
    } catch (error) {
        console.log(error)
    }
}

main()