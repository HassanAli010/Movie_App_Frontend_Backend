    const express = require("express")
    const app = express();
    const cors = require("cors")
    const {readdirSync } = require("fs")
    const dot =  require('dotenv');
    const {connectDB} = require("./connection")
    dot.configDotenv();
    const port = process.env.PORT || 8000;

    connectDB();
    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res)=>{
        res.send("<center><h1>server is running</h1></center>");

    });

    // console.log(readdirSync("./routes"))
    readdirSync("./routes").map((route)=> app.use('./api', require(`./routes/${route}`)));


    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });