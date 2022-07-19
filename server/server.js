import { config } from "dotenv";
config();
const ENV = process.env.NODE_ENV;
const isDev = ENV === "development";

import express from "express";
import colors from "colors";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import connectDB from "./config/db.js";
const PORT = process.env.PORT;

const app = express();
await connectDB();
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: isDev ? true : false,
    })
);

app.listen(PORT, () => {
    isDev && console.log("App is Running on PORT::%d", PORT);
});
