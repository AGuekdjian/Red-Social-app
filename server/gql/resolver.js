const userController = require("../controllers/user")

const resolvers = {
    Query: {
        // User
        getUser: (_, { id, username }) => userController.getUser(id, username),
    },
    Mutation: {
        // User
        register: (_, { input }) => userController.register(input),
        login: (_, { input }) => userController.login(input),
        updateAvatar: (_, { file }) => userController.updateAvatar(file),

    }
};

module.exports = resolvers