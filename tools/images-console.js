$('ins').map((i, el) => {
    return $(el).attr("style")
        .replace("background-image: url(http://wow.zamimg.com/images/wow/icons/", "")
        .replace(");", "")
        .replace('medium/','')
}).filter((i, el) => {
    return el.indexOf("small") === -1;
});
