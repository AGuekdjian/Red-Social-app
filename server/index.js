const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");

require("dotenv").config({ path: ".env" });

mongoose.set("strictQuery", true)
mongoose.connect(
    process.env.BBDD,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err, res) => {
        if (err) {
            console.log(err)
        } else {
            server()
        }
    }
);

function server() {
    const serverApollo = new ApolloServer({
        typeDefs,
        resolvers
    });

    serverApollo.listen().then(({ url }) => {
        console.log('------------------------------------------')
        console.log(`Servidor listo en: ${url}`)
        console.log('------------------------------------------')
    })
}