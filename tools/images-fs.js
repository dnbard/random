var _ = require('lodash');
var fs = require('fs');

exports.save = function(path, file){
    var current = require(path);
    current.push(file);

    fs.writeFileSync(path.replace('../', './'), 'module.exports = ' + JSON.stringify(_.uniq(current)) + ';');
}
