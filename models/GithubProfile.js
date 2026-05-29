const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const GithubProfile = sequelize.define(
  "GithubProfile",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    name: {
      type: DataTypes.STRING,
    },

    bio: {
      type: DataTypes.TEXT,
    },

    avatar_url: {
      type: DataTypes.STRING,
    },

    github_url: {
      type: DataTypes.STRING,
    },

    followers: {
      type: DataTypes.INTEGER,
    },

    following: {
      type: DataTypes.INTEGER,
    },

    public_repos: {
      type: DataTypes.INTEGER,
    },

    public_gists: {
      type: DataTypes.INTEGER,
    },

    total_stars: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    total_forks: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    total_watchers: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    most_used_language: {
      type: DataTypes.STRING,
    },

    account_created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = GithubProfile;