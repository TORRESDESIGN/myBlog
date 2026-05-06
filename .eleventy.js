const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


module.exports = function(eleventyConfig) {
    //This is for code block syntax for comments
    eleventyConfig.addPlugin(syntaxHighlight);

	// Order matters, put this at the top of your configuration file.
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.addPassthroughCopy("src/images");// globing method to get everything in folder
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/admin");

    //Date fix newer version?
    //eleventyConfig.addDateParsing()
    
    //This is a filter method, need to add postDate filter in html/njk ex: {{ post.data.date | postDate }}
    eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: "utc"}).toLocaleString(DateTime.DATE_MED);
    });

    // Get only content that matches a tag
    eleventyConfig.addCollection("myPostsJS", function (collectionsApi) {
        return collectionsApi.getFilteredByTag("javascript");
    });

    // CRITICAL: Enable Nunjucks for Markdown
    return {
    markdownTemplateEngine: "njk"
  };
}