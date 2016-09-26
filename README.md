# imgur-thumbnails
A simple node module that creates [thumbnail](https://api.imgur.com/models/image#thumbs) urls for images hosted on imgur.

## Installation
------------
```bash
npm install imgur-thumbnails
```

## Usage
-----
```js
const thumbnails = require('imgur-thumbnails'),
      url = 'http://i.imgur.com/12345.jpg';

thumbnails.small(url);
// => "http://i.imgur.com/12345s.jpg"    

thumbnails.big(url);
// => "http://i.imgur.com/12345b.jpg"

thumbnails.medium(url);
// => "http://i.imgur.com/12345m.jpg"

thumbnails.thumbnail(url, 'small');
// => "http://i.imgur.com/12345s.jpg"

thumbnails.thumbnail(url, 's');
// => "http://i.imgur.com/12345s.jpg"

thumbnails.thumbnail(url);
// => "http://i.imgur.com/12345m.jpg"

let urlSmall = thumbnails.small(url);

thumbnails.isThumbnail(urlSmall);
// => true

thumbnails.original(urlSmall);
// => 'http://i.imgur.com/12345.jpg';
```
    
## imgur-thumbnails Functions
------------------
* `small(url)`
* `big(url)`
* `smallT(url)`
* `medium(url)`
* `large(url)`
* `huge(url)`
* `thumbnail(url, size)`
* `isThumbnail(url)`
* `original(url)`
