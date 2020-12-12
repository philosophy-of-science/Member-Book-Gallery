const CleanCSS = require("clean-css");

const urlParse = (url) => {
  const match = url.match(/(\w+)\/?$/);
  return match[1];
};

module.exports = function (eleventyConfig) {
  // Liquid Filter
  eleventyConfig.addLiquidFilter("social", function (value) {
    const twitterIcon = '<i class="fa fa-twitter"></i>';
    const facebookIcon = '<i class="fa fa-facebook"></i>';
    const otherIcon = '<i class="fa fa-globe"></i>';

    if (value.type.toLowerCase() === "facebook") {
      return `
      <a style="background: #3b5998" href="${
        value.link
      }">${facebookIcon}&nbsp;${urlParse(value.link)}</a>
      `;
    }
    if (value.type.toLowerCase() === "twitter") {
      return `
      <a style="background: #1da1f2" href="${
        value.link
      }">${twitterIcon}&nbsp;@${urlParse(value.link)}</a>
      `;
    }
    return `
    <a style="background: #111" href="${
      value.link
    }">${otherIcon}&nbsp;${urlParse(value.link)}</a>
    `;
  });

  eleventyConfig.addLiquidFilter("addP", function (value) {
    if (/<p>/.test(value)) {
      return value;
    }
    return "<p>" + value + "</p>";
  });

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
};
