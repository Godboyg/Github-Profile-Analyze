const GithubProfile = require("../models/GithubProfile");
const fetchGithubData = require("../services/githubService");

const analyzeProfile = async (req, res, next) => {
  try {
    const { username } = req.params;

    const githubData = await fetchGithubData(username);

    let profile = await GithubProfile.findOne({
      where: { username },
    });
    if (profile) {
      await profile.update(githubData);
    } else {
      profile = await GithubProfile.create(githubData);
    }

    res.status(200).json({
      success: true,
      message: "GitHub Profile Analyzed Successfully",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProfiles = async (req, res, next) => {
  try {
    const profiles = await GithubProfile.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json({
      success: true,
      count: profiles.length,
      data: profiles,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleProfile = async (req, res, next) => {
  try {
    const { username } = req.params;

    const profile = await GithubProfile.findOne({
      where: { username },
    });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  analyzeProfile,
  getAllProfiles,
  getSingleProfile,
};