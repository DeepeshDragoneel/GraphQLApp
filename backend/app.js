const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()

const app = express();

app.use(cors());
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

const port = process.env.PORT || 8000;

mongoose.connect(
    `mongodb+srv://DeepeshDragoneel:${process.env.db_pass}@cluster0.nudhs.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`
).then(()=>{
    app.listen(port, () => {
        console.log(`Express server listening on PORT:${port}`);
    });
}).catch((error)=>{
    console.log(error);
})
