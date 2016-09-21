module.exports.thumbnailSmall = function(url){
	return addChar(url, 's');
}
module.exports.thumbnailBig = function(url){
	return addChar(url, 'b');
}
module.exports.thumbnailSmallT = function(url){
	return addChar(url, 't');
}
module.exports.thumbnailMedium = function(url){
	return addChar(url, 'm');
}
module.exports.thumbnailLarge = function(url){
	return addChar(url, 'l');
}
module.exports.thumbnailHuge = function(url){
	return addChar(url, 'h');
}

module.exports.thumbnail = function(url, size){
	return;
}

function addChar(url, char){
	const i = url.lastIndexOf('.');
	if (i != -1) {
		return url.substr(0, i) + char + url.substr(i) ;
	} else {
		throw new Error('Invalid URL');
	}
}
