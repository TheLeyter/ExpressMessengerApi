import express from 'express'
import AuthRouter from "./routings/AuthRouting"

const app = express();
const port = 5000;

app.use(express.json())
app.use("/api",AuthRouter)

app.listen(port, () => console.log(`Running on port ${port}`));