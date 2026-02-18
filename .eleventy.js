const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
	// Order matters, put this at the top of your configuration file.
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.addPassthroughCopy("src/images");// globing method to get everything in folder
    eleventyConfig.addPassthroughCopy("src/style.css");

    //Date fix newer version?
    //eleventyConfig.addDateParsing()
    
    //This is a filter method, need to add postDate filter in html/njk ex: {{ post.data.date | postDate }}
    eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: "utc"}).toLocaleString(DateTime.DATE_MED);
    });


}