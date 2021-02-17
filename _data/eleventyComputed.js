module.exports = {
  eleventyComputed: {
    memberBooksSorted: data => {
      const sortedTitles = data.member.sort((a, b) => {
        if (a.last_name.toLowerCase() < b.last_name.toLowerCase()) {
          return -1;
        }
        if (a.last_name.toLowerCase() > b.last_name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      return sortedTitles;
    },
  },
};
