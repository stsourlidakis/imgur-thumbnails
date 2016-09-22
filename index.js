module.exports.small = function(url){
	return addChar(url, 's');
}
module.exports.big = function(url){
	return addChar(url, 'b');
}
module.exports.smallT = function(url){
	return addChar(url, 't');
}
module.exports.medium = function(url){
	return addChar(url, 'm');
}
module.exports.large = function(url){
	return addChar(url, 'l');
}
module.exports.huge = function(url){
	return addChar(url, 'h');
}

module.exports.thumbnail = function(url, size){
	size = size || 'm';
	switch(size){
		case 's':
		case 'small':
			return module.exports.small(url);
		case 'b':
		case 'big':
			return module.exports.big(url);
		case 't':
		case 'smallT':
			return module.exports.smallT(url);
		case 'm':
		case 'medium':
			return module.exports.medium(url);
		case 'l':
		case'large':
			return module.exports.large(url);
		case 'h':
		case 'huge':
			return module.exports.huge(url);
		default:
			throw new Error('Invalid size argument');
	}
}

function addChar(url, char){
	const i = url.lastIndexOf('.');
	if (i != -1) {
		return url.substr(0, i) + char + url.substr(i) ;
	} else {
		throw new Error('Invalid URL');
	}
}
