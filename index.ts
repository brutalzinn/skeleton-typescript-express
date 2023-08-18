import express, { Request, Response } from "express"

const app = express()

app.post("/", (req : Request, res: Response ) => {
    res.send("HELLO WORLD!")
})

const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`jaecred notify api is listining on PORT ${port}`)
})