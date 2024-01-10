const { User, Playlist } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

// Resolvers Function Start//
const resolvers = {
  Query: {
    ///Connects to me query in typeDef//
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("savedPlaylist");
        // .populate('friends');
        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    //Gets All Users//
    users: async () => {
      return User.find().select("-__v -password").populate("savedPlaylist");
      // .populate('friends');
    },
    //Gets Single User//
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("savedMovie");
      // .populate('thoughts');
    },
    //Get All Movies//
    playlists: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Playlist.find(params).sort({ createdAt: -1 });
    },
    //Gets Movie By ID//
    playlist: async (parent, { _id }) => {
      return Playlist.findOne({ _id });
    },
  },
  /// --- Mutation Start --- ///
  Mutation: {
    //Creates New User//
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    //Mutation for login//
    login: async (parent, { email, password }) => {
      /// ---- Const searches for email ---///
      const user = await User.findOne({ email });
      /// ---- if email not found it throws error ---///
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      /// ---- Const searches for correct password ---///
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    //Add A New Movie///
    addPlaylist: async (parent, args, context) => {
      if (context.user) {
        const playlist = await Playlist.create({
          ...args,
          username: context.user.username,
        });
        //Finds User By ID & Adds Movie//
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedPlaylist: playlist } },
          { new: true }
        );

        return playlist;
      }
      //Error If Not Logged In//
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};
/// ---- Resolvers Function End ---- ////

module.exports = resolvers;
