# FINALPROJECT


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
