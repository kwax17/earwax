const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat.js');

const playlistSchema = new Schema(
  {
    playlistTitle: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

playlistSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Playlist = model('Playlist', playlistSchema);

module.exports = Playlist;
