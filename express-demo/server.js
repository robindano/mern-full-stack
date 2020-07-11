const express = require("express")
const app = express();
const port = 8000;

app.use(express.json() );
app.use(express.urlencoded({extended:true}) );


app.listen(port, () => console.log("listening on port 8000 "))


const users = [
    {firstName:"Reimu", lastName:"Hakurei"},
    {firstName:"Marisa", lastName:"Kirisame"},
    {firstName:"Sanae", lastName:"Kochiya"}
];

app.get("/api", (req,res)=>{
    res.json({message: "Hello world"})
});

app.post("/api/users", (req, res)=>{
    console.log(req.body);

    users.push(req.body);

    res.json({status:"ok"});
});

app.get("/api/users/:id", (req, res) =>{
    console.log(req.params.id);

    res.json(users[id]);
})

app.put("/api/users/:id", (req, res) =>{
    const id = req.params.id;

    users[id]=req.body;

    res.json({status: "ok"});
});

app.put("/api/users/:id", (req,res)=>{
    const id = req.params.id;

    users.splice(id, 1);

    res.json({status:"ok"});
});

