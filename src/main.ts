// libs import
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// server port configurate
const PORT: number = 5555;

// server init
const app: any = express();

// middleware
app.use(cors());                    // cors politic allowed
app.use(bodyParser());              // request data parser
app.use(bodyParser.json());         // request json parser
app.use(bodyParser.urlencoded());   // i don't know for what, but thats's module should be enable for server good working

//
app.get('/auth', (req: any, res: any) : void => {
  res.send(true);
});


// server start
app.listen(PORT, console.log(`Server started on port: ${PORT}`));