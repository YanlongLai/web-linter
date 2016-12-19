from urllib2 import urlopen
from urllib2 import Request
from bs4 import BeautifulSoup
import time

url = 'http://www.viki.com'
req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urlopen(req)
bsObj = BeautifulSoup(html.read(), "html.parser")
linkNum = 0
cardContents = bsObj.findAll("div", {"class": "card-content"})
print(url, time.strftime("%x"), "link")
for cardContent in cardContents:
    print(cardContent)
    print(len(cardContent))
    print('-------------')
    linkNum += len(cardContent)
print('card-content', len(cardContents))
print('linkNum', linkNum)
