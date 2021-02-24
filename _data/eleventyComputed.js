module.exports = {
  eleventyComputed: {
    memberData: data => {
      const shuffle = arr => {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      };
      const shuffledData = shuffle(data.member);
      return shuffledData;
    },
  },
};
