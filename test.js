const	expect = require('chai').expect,
		imgurThumbnail = require('./index');

const	input = 'https://i.imgur.com/zXSTP7j.png',
		invalidInput = 'qwe',
		inputExtension = input.split('.').pop();
		
describe('imgurThumbnail', function(){
	describe('thumbnailSmall', function(){
		const size = 's';
		it('Result should be a string', function(){
			expect(imgurThumbnail.thumbnailSmall(input)).be.a('string');
		});
		it('Result should be a character longer than input', function(){
			expect(imgurThumbnail.thumbnailSmall(input)).to.have.lengthOf(input.length+1);
		});
		it('Result should have the same extension as the input', function(){
			expect(imgurThumbnail.thumbnailSmall(input)).to.satisfy(hasTheSameExtension);
			function hasTheSameExtension(result){
				return result.split('.').pop() === inputExtension;
			}
		});
		it('Result should have the size character followed by the extension', function(){
			expect(imgurThumbnail.thumbnailSmall(input)).to.contain(size+'.'+inputExtension);
		});
		it('Should throw an error when the input doesn\'t contain a dot', function(){
			expect(imgurThumbnail.thumbnailSmall.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('thumbnailBig', function(){
		const size = 'b';
		it('Result should be a string', function(){
			expect(imgurThumbnail.thumbnailBig(input)).be.a('string');
		});
		it('Result should be a character longer than input', function(){
			expect(imgurThumbnail.thumbnailBig(input)).to.have.lengthOf(input.length+1);
		});
		it('Result should have the same extension as the input', function(){
			expect(imgurThumbnail.thumbnailBig(input)).to.satisfy(hasTheSameExtension);
			function hasTheSameExtension(result){
				return result.split('.').pop() === inputExtension;
			}
		});
		it('Result should have the size character followed by the extension', function(){
			expect(imgurThumbnail.thumbnailBig(input)).to.contain(size+'.'+inputExtension);
		});
		it('Should throw an error when the input doesn\'t contain a dot', function(){
			expect(imgurThumbnail.thumbnailBig.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('thumbnailSmallT', function(){
		const size = 't';
		it('Result should be a string', function(){
			expect(imgurThumbnail.thumbnailSmallT(input)).be.a('string');
		});
		it('Result should be a character longer than input', function(){
			expect(imgurThumbnail.thumbnailSmallT(input)).to.have.lengthOf(input.length+1);
		});
		it('Result should have the same extension as the input', function(){
			expect(imgurThumbnail.thumbnailSmallT(input)).to.satisfy(hasTheSameExtension);
			function hasTheSameExtension(result){
				return result.split('.').pop() === inputExtension;
			}
		});
		it('Result should have the size character followed by the extension', function(){
			expect(imgurThumbnail.thumbnailSmallT(input)).to.contain(size+'.'+inputExtension);
		});
		it('Should throw an error when the input doesn\'t contain a dot', function(){
			expect(imgurThumbnail.thumbnailSmallT.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('thumbnailMedium', function(){
		const size = 'm';
		it('Result should be a string', function(){
			expect(imgurThumbnail.thumbnailMedium(input)).be.a('string');
		});
		it('Result should be a character longer than input', function(){
			expect(imgurThumbnail.thumbnailMedium(input)).to.have.lengthOf(input.length+1);
		});
		it('Result should have the same extension as the input', function(){
			expect(imgurThumbnail.thumbnailMedium(input)).to.satisfy(hasTheSameExtension);
			function hasTheSameExtension(result){
				return result.split('.').pop() === inputExtension;
			}
		});
		it('Result should have the size character followed by the extension', function(){
			expect(imgurThumbnail.thumbnailMedium(input)).to.contain(size+'.'+inputExtension);
		});
		it('Should throw an error when the input doesn\'t contain a dot', function(){
			expect(imgurThumbnail.thumbnailMedium.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('thumbnailLarge', function(){
		const size = 'l';
		it('Result should be a string', function(){
			expect(imgurThumbnail.thumbnailLarge(input)).be.a('string');
		});
		it('Result should be a character longer than input', function(){
			expect(imgurThumbnail.thumbnailLarge(input)).to.have.lengthOf(input.length+1);
		});
		it('Result should have the same extension as the input', function(){
			expect(imgurThumbnail.thumbnailLarge(input)).to.satisfy(hasTheSameExtension);
			function hasTheSameExtension(result){
				return result.split('.').pop() === inputExtension;
			}
		});
		it('Result should have the size character followed by the extension', function(){
			expect(imgurThumbnail.thumbnailLarge(input)).to.contain(size+'.'+inputExtension);
		});
		it('Should throw an error when the input doesn\'t contain a dot', function(){
			expect(imgurThumbnail.thumbnailLarge.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('thumbnailHuge', function(){
		const size = 'h';
		it('Result should be a string', function(){
			expect(imgurThumbnail.thumbnailHuge(input)).be.a('string');
		});
		it('Result should be a character longer than input', function(){
			expect(imgurThumbnail.thumbnailHuge(input)).to.have.lengthOf(input.length+1);
		});
		it('Result should have the same extension as the input', function(){
			expect(imgurThumbnail.thumbnailHuge(input)).to.satisfy(hasTheSameExtension);
			function hasTheSameExtension(result){
				return result.split('.').pop() === inputExtension;
			}
		});
		it('Result should have the size character followed by the extension', function(){
			expect(imgurThumbnail.thumbnailHuge(input)).to.contain(size+'.'+inputExtension);
		});
		it('Should throw an error when the input doesn\'t contain a dot', function(){
			expect(imgurThumbnail.thumbnailHuge.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});

});
