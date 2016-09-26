'use strict';
const	expect = require('chai').expect,
		imgurThumbnail = require('./index');

const	input = 'https://i.imgur.com/zXSTP7j.png',
		invalidInput = 'qwe',
		invalidSize = 'qwe',
		inputExtension = input.split('.').pop(),
		sizes = ['s', 'small', 'b', 'big', 't', 'smallT', 'm', 'medium', 'l', 'large', 'h', 'huge'];
		
describe('imgurThumbnail', function(){
	describe('small', function(){
		const	size = 's',
				result = imgurThumbnail.small(input)
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
			expect(imgurThumbnail.small.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('big', function(){
		const	size = 'b';
				result = imgurThumbnail.big(input);
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
			expect(imgurThumbnail.big.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('smallT', function(){
		const	size = 't',
				result = imgurThumbnail.smallT(input);
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
			expect(imgurThumbnail.smallT.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('medium', function(){
		const 	size = 'm',
				result = imgurThumbnail.medium(input);
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
			expect(imgurThumbnail.medium.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('large', function(){
		const	size = 'l',
				result = imgurThumbnail.large(input);
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
			expect(imgurThumbnail.large.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
	
	describe('huge', function(){
		const	size = 'h',
				result = imgurThumbnail.huge(input);
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
			expect(imgurThumbnail.huge.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});

	for (let size of sizes){
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
				expect(imgurThumbnail.thumbnail(input, size)).to.contain((size!='smallT'?size.charAt(0):'t')+'.'+inputExtension);
			});
			it('Should throw an error when the input doesn\'t contain a dot', function(){
				expect(imgurThumbnail.huge.bind(imgurThumbnail, invalidInput, size)).to.throw('Invalid URL');
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
	
	
	describe('isThumbnail(url)', function(){
		it('Should return a boolean', function(){
			expect(imgurThumbnail.isThumbnail(input)).to.a('boolean');
		});
		for(let i=0, n=sizes.length, thumbnailInput; i<n; i+=2){
			it('Should return true for a '+sizes[i+1]+' thumbnail url', function(){
				thumbnailInput = imgurThumbnail.thumbnail(input, sizes[i]);
				expect(imgurThumbnail.isThumbnail(thumbnailInput)).eql(true);
			});
		}
		it('Should return false for a normal url', function(){
			expect(imgurThumbnail.isThumbnail(input)).eql(false);
		});
	});
	
	describe('original(url)', function(){
		it('Result should be a string', function(){
			expect(imgurThumbnail.original(input)).be.a('string');
		});
		for(let i=0, n=sizes.length, thumbnailInput; i<n; i+=2){
			thumbnailInput = imgurThumbnail.thumbnail(input, sizes[i]);
			
			it('Result should be a character shorter for a '+sizes[i+1]+' thumbnail url', function(){
				expect(imgurThumbnail.original(thumbnailInput)).to.have.lengthOf(thumbnailInput.length-1);
			});
			it('Should return the original url for a '+sizes[i+1]+' thumbnail url', function(){
				expect(imgurThumbnail.original(thumbnailInput)).equal(input);
			});
		}
		it('Should throw an error when the input doesn\'t contain a dot', function(){
			expect(imgurThumbnail.original.bind(imgurThumbnail, invalidInput)).to.throw('Invalid URL');
		});
	});
});
