from urllib2 import urlopen
from urllib2 import Request
from bs4 import BeautifulSoup, NavigableString
import time
import json
import random

# depulicate algo
def RiteshKumar(l):
    return list(set([x for x in l if l.count(x) > 1]))

# random color
def hexCodeColors():
    a = hex(random.randrange(0,256))
    b = hex(random.randrange(0,256))
    c = hex(random.randrange(0,256))
    a = a[2:]
    b = b[2:]
    c = c[2:]
    if len(a)<2:
        a = "0" + a
    if len(b)<2:
        b = "0" + b
    if len(c)<2:
        c = "0" + c
    z = a + b + c
    return "#" + z.upper()

# default config
url = 'http://www.viki.com'
req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urlopen(req)
bsObj = BeautifulSoup(html.read(), "html.parser")

# find duplicate links of homepage
links = []
for link in bsObj.findAll("a"):
    links.append(link.get('href'))

links = RiteshKumar(links)

# highlight the duplicate links
duplicateIndex = 0
for duplicateLink in links:
    color = hexCodeColors()
    duplicateIndex = duplicateIndex + 1
    for a in bsObj.findAll('a'):
        if a.get('href') == duplicateLink:
            # add tag
            a.insert(0, NavigableString("(" + str(duplicateIndex) + ")"))
            a['style'] = "border-style: solid; border-width: 8px; border-color: " + color + ";"

# use homepage css
for linkSource in bsObj.findAll("link"):
    linkSource['href'] = linkSource['href'].replace("//","http://")

# new page
html = bsObj.prettify("utf-8")
timestr = time.strftime("%Y%m%d_%H%M%S")
with open("viki_" + timestr + ".html", "wb") as file:
    file.write(html)