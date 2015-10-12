var ImagesFS = require('../tools/images-fs');
var _ = require('lodash');

var PAGE_INCREMENT = 50;

var config = [{
    name: 'daggers',
    count: 1136,
    url: 'http://www.wowhead.com/items=2.15#items:<%= position %>-2'
}];

var automationQueue = {};

_.each(config, function(c){
    var cursor = 0;

    while(cursor < c.count){
        automationQueue[c.name + ' - page ' + (cursor / PAGE_INCREMENT).toFixed(0)] = (function(cursor, topic){
            return function(browser){
                browser.url(_.template(c.url)({position: cursor})).waitForElementVisible('body', 2000)
                .click('.walkthrough-details-done')
                .elements('tag name', 'ins', function(result) {
                    result.value.forEach(function(el){
                        browser.elementIdAttribute(el.ELEMENT, 'style', function(result){
                            var data = result.value.replace("background-image: url(http://wow.zamimg.com/images/wow/icons/", "")
                                .replace("background-image: url(\"//wow.zamimg.com/images/wow/icons/", "")
                                .replace(");", "")
                                .replace("\"", "")
                                .replace('medium/','')
                                .replace('small/','');

                            ImagesFS.save(_.template('../items/<%= topic %>-images.js')({topic: topic}), data);
                        });
                    });
                }).end();
            }
        })(cursor, c.name);
        cursor += PAGE_INCREMENT;
    }
});

module.exports = automationQueue;
