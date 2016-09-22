const	expect = require('chai').expect,
		imgurThumbnail = require('./index');

const	input = 'https://i.imgur.com/zXSTP7j.png',
		invalidInput = 'qwe',
		invalidSize = 'qwe',
		inputExtension = input.split('.').pop(),
		sizes = ['s', 'small', 'b', 'big', 't', 'smallT', 'm', 'medium', 'l', 'large', 'h', 'huge'];
		
describe('imgurThumbnail', function(){
	describe('thumbnailSmall', function(){
		const	size = 's',
				result = imgurThumbnail.thumbnailSmall(input)
		it('Result should be a string', function(){
			expect(result).be.a('string');
		});
		it('Result should be a character longer than input', function(){
			expect(result).to.have.lengthOf(input.length+1);
		});
		it('Result should have the same extension as the input', function(){
			expect(result).to.satisfy(hasTheSameExtension);
			function hasTheSameExtension(result){
				return result.split('.').pop() === inputExtension;
			}
		});
		it('Result should have the size character followed by the extension', function(){
			expect(result).to.contain(size+'.'+inputExtension);
		});
		it('Should throw an error when the input doesn\'t contain a dot', function(){
			expect(imgurThumbnail.thumbnailSmall.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('thumbnailBig', function(){
		const	size = 'b';
				result = imgurThumbnail.thumbnailBig(input);
		it('Result should be a string', function(){
			expect(result).be.a('string');
		});
		it('Result should be a character longer than input', function(){
			expect(result).to.have.lengthOf(input.length+1);
		});
		it('Result should have the same extension as the input', function(){
			expect(result).to.satisfy(hasTheSameExtension);
			function hasTheSameExtension(result){
				return result.split('.').pop() === inputExtension;
			}
		});
		it('Result should have the size character followed by the extension', function(){
			expect(result).to.contain(size+'.'+inputExtension);
		});
		it('Should throw an error when the input doesn\'t contain a dot', function(){
			expect(imgurThumbnail.thumbnailBig.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('thumbnailSmallT', function(){
		const	size = 't',
				result = imgurThumbnail.thumbnailSmallT(input);
		it('Result should be a string', function(){
			expect(result).be.a('string');
		});
		it('Result should be a character longer than input', function(){
			expect(result).to.have.lengthOf(input.length+1);
		});
		it('Result should have the same extension as the input', function(){
			expect(result).to.satisfy(hasTheSameExtension);
			function hasTheSameExtension(result){
				return result.split('.').pop() === inputExtension;
			}
		});
		it('Result should have the size character followed by the extension', function(){
			expect(result).to.contain(size+'.'+inputExtension);
		});
		it('Should throw an error when the input doesn\'t contain a dot', function(){
			expect(imgurThumbnail.thumbnailSmallT.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('thumbnailMedium', function(){
		const 	size = 'm',
				result = imgurThumbnail.thumbnailMedium(input);
		it('Result should be a string', function(){
			expect(result).be.a('string');
		});
		it('Result should be a character longer than input', function(){
			expect(result).to.have.lengthOf(input.length+1);
		});
		it('Result should have the same extension as the input', function(){
			expect(result).to.satisfy(hasTheSameExtension);
			function hasTheSameExtension(result){
				return result.split('.').pop() === inputExtension;
			}
		});
		it('Result should have the size character followed by the extension', function(){
			expect(result).to.contain(size+'.'+inputExtension);
		});
		it('Should throw an error when the input doesn\'t contain a dot', function(){
			expect(imgurThumbnail.thumbnailMedium.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('thumbnailLarge', function(){
		const	size = 'l',
				result = imgurThumbnail.thumbnailLarge(input);
		it('Result should be a string', function(){
			expect(result).be.a('string');
		});
		it('Result should be a character longer than input', function(){
			expect(result).to.have.lengthOf(input.length+1);
		});
		it('Result should have the same extension as the input', function(){
			expect(result).to.satisfy(hasTheSameExtension);
			function hasTheSameExtension(result){
				return result.split('.').pop() === inputExtension;
			}
		});
		it('Result should have the size character followed by the extension', function(){
			expect(result).to.contain(size+'.'+inputExtension);
		});
		it('Should throw an error when the input doesn\'t contain a dot', function(){
			expect(imgurThumbnail.thumbnailLarge.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('thumbnailHuge', function(){
		const	size = 'h',
				result = imgurThumbnail.thumbnailHuge(input);
		it('Result should be a string', function(){
			expect(result).be.a('string');
		});
		it('Result should be a character longer than input', function(){
			expect(result).to.have.lengthOf(input.length+1);
		});
		it('Result should have the same extension as the input', function(){
			expect(result).to.satisfy(hasTheSameExtension);
			function hasTheSameExtension(result){
				return result.split('.').pop() === inputExtension;
			}
		});
		it('Result should have the size character followed by the extension', function(){
			expect(result).to.contain(size+'.'+inputExtension);
		});
		it('Should throw an error when the input doesn\'t contain a dot', function(){
			expect(imgurThumbnail.thumbnailHuge.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});

	for (var size of sizes){
		describe('thumbnail(url, \''+size+'\')', function(){
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
				expect(imgurThumbnail.thumbnail(input, size)).to.contain(size.charAt(0)+'.'+inputExtension);
			});
			it('Should throw an error when the input doesn\'t contain a dot', function(){
				expect(imgurThumbnail.thumbnailHuge.bind(imgurThumbnail, invalidInput, size)).to.throw('Invalid URL');
			});
		});
	}
	
	describe('thumbnail(url, size)', function(){
		it('Should throw an error when the size is invalid', function(){
			expect(imgurThumbnail.thumbnail.bind(imgurThumbnail, invalidInput, invalidSize)).to.throw('Invalid size argument');
		});
	});
	describe('thumbnail(url)', function(){
		it('Result should be a string', function(){
			expect(imgurThumbnail.thumbnail(input)).be.a('string');
		});
		it('Result should be a character longer than input', function(){
			expect(imgurThumbnail.thumbnail(input)).to.have.lengthOf(input.length+1);
		});
		it('Result should have the same extension as the input', function(){
			expect(imgurThumbnail.thumbnail(input)).to.satisfy(hasTheSameExtension);
			function hasTheSameExtension(result){
				return result.split('.').pop() === inputExtension;
			}
		});
		it('Result should have the default size character followed by the extension', function(){
			expect(imgurThumbnail.thumbnail(input)).to.contain('m.'+inputExtension);
		});
		it('Should throw an error when the input doesn\'t contain a dot', function(){
			expect(imgurThumbnail.thumbnail.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
});
