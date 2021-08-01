const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Note {
      id: ID
    title: String
    content: String
    author: String
  }

  type Query {
    getNotes: [Note]
    getNote(id: ID!): Note
  }
`;

const data = [
    {
        id: 0,
        title: 'The Awakening',
        content: "a",
        author: 'Kate Chopin',
    },
    {
        id: 1,
        title: 'The Awakening',
        content: "a",
        author: 'Kate Chopin',
    },
    {
        id: 2,
        title: 'The Awakening',
        content: "a",
        author: 'Kate Chopin',
    },
];



const resolvers = {
    Query: {
        getNotes: () => data,
        getNote(parent,args,context,info){
            const note=data.find(el=>el.id==args.id);
            if(note===undefined) throw new Error('Doesnt exist');
            return note;
        }
    },
};


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
