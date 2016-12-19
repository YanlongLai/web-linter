# web-linter
Find duplicated content of web

## Mission

Phase 1         

1. apple heroku and build a new project
2. add node_modules http-server and ngrok
3. install heroku-cli (https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
4. set heroku app config var
5. combine redux redux kit to heroku

Phase 2          

1. choose parser tool
2. use node.js and get all links
3. change to use python
4. use scrapy or beauifulsoup lib
5. use beauifulsoup to find duplicated links

Phase 3

1. build auto shell script
2. use cron or pm2 to parser hourly
3. build auto Crawer to go to different webs
4. let user change url link
5. use scrapy to scrapy second or third depth link of the homepage

## command
```
// get duplicated link and draw on the homepage
$ python viki.py

// auto run viki and git commit and push result
$ sh autoPublish.sh
```

## Result

We can get a viki homepage and color duplicated link. In order to view the duplicated contents, we use the same color and numebr on the component.
The result will automatically produced in `/src/resource/viki_20161220_00000.html`.

## My repo

### python_web_lint
https://github.com/YanlongLai/python_web_lint

### web-linter
https://github.com/YanlongLai/web-linter

### heroku (TODO)
https://web-lintr.herokuapp.com/
