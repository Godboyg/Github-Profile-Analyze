const axios = require("axios");

const fetchGithubData = async (username) => {
  try {
    const [userResponse, repoResponse] = await Promise.all([
      axios.get(`https://api.github.com/users/${username}`),

      axios.get(
        `https://api.github.com/users/${username}/repos?per_page=100`
      ),
    ]);
    const user = userResponse.data;
    const repos = repoResponse.data;

    let totalStars = 0;
    let totalForks = 0;
    let totalWatchers = 0;

    const languageCount = {};

    repos.forEach((repo) => {
      totalStars += repo.stargazers_count;
      totalForks += repo.forks_count;
      totalWatchers += repo.watchers_count;

      if (repo.language) {
        languageCount[repo.language] =
          (languageCount[repo.language] || 0) + 1;
      }
    });

    let mostUsedLanguage = "Not Available";

    if (Object.keys(languageCount).length > 0) {
      mostUsedLanguage = Object.keys(languageCount).reduce((a, b) =>
        languageCount[a] > languageCount[b] ? a : b
      );
    }

    return {
      username: user.login,
      name: user.name,
      bio: user.bio,
      avatar_url: user.avatar_url,
      github_url: user.html_url,
      followers: user.followers,
      following: user.following,
      public_repos: user.public_repos,
      public_gists: user.public_gists,
      total_stars: totalStars,
      total_forks: totalForks,
      total_watchers: totalWatchers,
      most_used_language: mostUsedLanguage,
      account_created_at: user.created_at,
    };
  } catch (error) {
    throw new Error("GitHub user not found");
  }
};

module.exports = fetchGithubData;