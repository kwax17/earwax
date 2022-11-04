/// -- import the gql tagged template function -- ///
const { gql } = require("apollo-server-express");

/// ----  create our typeDefs ---- ///
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedPlaylist: [Playlist]
  }

  type Playlist {
    _id: ID
    movieTitle: String
    createdAt: String
    username: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    playlists(playlistTitle: String): [Playlist]
    playlist(_id: ID!): Playlist
  }
`;

// export the typeDefs
module.exports = typeDefs;
