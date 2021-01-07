const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

    //add plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.setDataDeepMerge(true);

    //passthrough
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("files");

};