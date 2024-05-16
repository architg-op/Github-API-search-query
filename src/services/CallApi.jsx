// const callApi = async (e) => {
//     setName(e.target.value);
//     const octokit = new Octokit({
//       auth: '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',
//     });
//     setLoader(true);
//     let allRepos = await octokit.request(`GET /search/repositories?q=${name}`, {
//       headers: {
//         'X-GitHub-Api-Version': '2022-11-28',
//       },
//     });
//     setLoader(false);
//     allRepos = allRepos.data.items;
//     console.log(allRepos);
//     allRepos = allRepos.map((repo) => ({
//       id: repo.id,
//       name: repo.name,
//       stars: repo.stargazers_count,
//       description: repo.description,
//       language: repo.language,
//     }));
//     console.log(allRepos);
//     setRepos(allRepos);
//   };
