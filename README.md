# FINALPROJECT

ULTIMATE PROJECT:

Tried doing the webscraping a few different ways -- with an express server, with cheeriojs. The implementation that ended up working the best was using PhantomJS, CasperJS and SpookyJS, which is what I then used to write my serverside code, contradicting my initial project proposal.

Demo works for Leo star sign only, and some websites/horoscope services had to be changed. Ex. a problem I ran into when trying to scrape data from Broadly was that the output from "fetchText("body")" contained different HTML than the one on the actual site. This was because Broadly was not containing any of the actual content on the page, but instead using lots of heavy JS to fetch and organize it. Casper is not able to parse JS that easily, so I switched over to some older websites with simpler structure and used SpookyJS to integrate things with the rest of my node modules for analysis etc. 

Current state of the project is that it grabs new info every time the page refreshes -- it will return the correct data for my horoscope from day to day. I did not end up implementing the similarity analysis, but parsed the data into String arrays for a possible future implementation of this. This data prints out in console/terminal.


INITIAL PROPOSAL:

Backbone web application. Uses following concepts from class: socket.io with an Express server, handlebars.js, HTML/CSS and jquery, and underscore.js library. 

When the Client enters the app, she’s given the option to choose one of the twelve star signs. This will then redirect her to a page with 6 options for astrology services and prompt her to choose her favorite (ex. Broadly daily horoscope). The information drawn from that website’s text will appear and the user can click a button to view similarity analyses.

The app will draw from 6-10 different daily horoscope sites (Broadly, Cosmo, Betches, Elle, etc.) using a webscraper (most likely Cheerio or PhantomJS) and use some form of text analysis similar to the one we used in HW2 to return the most frequent words and phrases for a particular day’s horoscope. The application is modeled similarly to HW5 (Backbone):

Views:
SingleHoroscopeView
ListView

Models:
ClientModel
HoroscopeModel


Router:
Horoscope.js

Collections:
HoroscopeCollection


This information will then be returned in order of highest similarity percentage to lowest. The idea is that the user can determine the accuracy of her horoscope for that day and determine which parts of her favorite horoscope are most likely to come true that day. :)
