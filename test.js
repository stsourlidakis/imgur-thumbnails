var expect = require('chai').expect;
var imgurThumbnail = require('./index');

var input = 'https://i.imgur.com/zXSTP7j.png';
var inputExtension = input.split('.').pop();
var size = 's';
describe('imgurThumbnail', function(){
	describe('thumbnail', function(){
		it('Result should be a string', function(){
			expect(imgurThumbnail.thumbnail(input, size)).be.a('string');
		});
		it('Result should be a character longer than input', function(){
			expect(imgurThumbnail.thumbnail(input, size)).to.have.lengthOf(input.length+1);
		});
		it('Result should have the same extension as the input', function(){
			expect(imgurThumbnail.thumbnail(input, size)).to.satisfy(hasTheSameExtension);
			function hasTheSameExtension(result){
				return result.split('.').pop() === inputExtension;
			}
		});
		it('Result should have the size character followed by the extension', function(){
			expect(imgurThumbnail.thumbnail(input, size)).to.contain(size+'.'+inputExtension);
		});
	});
});
