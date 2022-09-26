const { Console } = require("console");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('resume/resume.yaml');

    return {
        dir: {
            input: "templates",
            output: "dist"
        },
        passthroughFileCopy: true
    }
}