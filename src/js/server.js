
try {
  var Spooky = require('spooky');
} catch (e) {
  var Spooky = require('../lib/spooky');
}
var contentBetches;
var contentNYD;
var contentAstrology;
var contentEl;
var contentNYPost;



var spooky = new Spooky({
  child: {
    transport: 'http'
  },
  casper: {
    logLevel: 'debug',
    verbose: true,
    options: {
     clientScripts: ['../public/javascripts/jquery.min.js']
   }
  }
}, function (err) {
  console.log('this is the Node context');
  var selectXPath = 'xPath = function(expression) {\
    return {\
      type: "xpath",\
      path: expression,\
      toString: function () {\
        return this.type + " selector: " + this.path;\
      }\
    };\
  };';


  if (err) {
    e = new Error('Failed to initialize SpookyJS');
    e.details = err;
    throw e;
  }


//BETCHES PROCESS
 spooky.start('http://www.betches.com/horoscope');
  console.log('Started');

  spooky.then([{x: selectXPath}, function() {
    eval(x);
    return this.click(xPath('//a[text()[contains(.,"Here")]]'), function () {
      console.log('Redirecting to ' + this.getCurrentUrl()); // Use this.log inside spooky
    });
  }]);

  spooky.then(function() {
    console.log('Getting text');
    contentBe = this.fetchText('#body-content > div.field.field-name-body.field-type-text-with-summary.field-label-hidden > div > div > p:nth-child(16)');
    console.log(contentBe);

    this.emit('analyzeContentBe', contentBe)
  });


//NY DAILY PROCESS
  spooky.thenOpen('http://www.nydailynews.com/horoscopes/daily');
  console.log('OPened');

  spooky.then([{x: selectXPath}, function() {
    eval(x);
    return this.click(xPath('//h3[text()[contains(.,"Leo")]]'), function () {
      console.log('Redirecting to ' + this.getCurrentUrl()); // Use this.log inside spooky
    });
  }]);

  spooky.then(function() {
    console.log('Getting NY DAILY NEWS text');
    contentNY = this.fetchText('#horoscopes .rt-b');
    console.log(contentNY);

    this.emit('analyzeContentNY', contentNY)
  });

//ASTR PROCESS
  spooky.thenOpen('https://www.astrology.com/horoscope/daily/leo.html');
  console.log('Opened astrology');

  spooky.then(function() {
    console.log('Getting Astr text');
    contentAstr = this.fetchText('body > section.horoscope.leo.clearfix > div.daily-horoscope > p:nth-child(5)');
    console.log(contentAstr);


    this.emit('analyzeContentAstr', contentAstr)
  });

//ELLE PROCESS
  spooky.thenOpen('http://www.elle.com/horoscopes/daily/');
  console.log('Opened elle')

  spooky.then([{x: selectXPath}, function() {
    eval(x);
    return this.click(xPath('//a[text()[contains(.,"Leo")]]'), function () {
      console.log('Redirecting to ' + this.getCurrentUrl()); // Use this.log inside spooky
    });
  }]);
  spooky.then(function() {
    console.log('Getting ELLE text');
    contentElle = this.fetchText('body > div.site-content > div.content-container.standard-container > div.standard-body > div.article-body-content.standard-body-content > p:nth-child(4)');
    console.log(contentElle);

    this.emit('analyzeContentElle', contentElle)
  });


//NY POST PROCESS
  spooky.thenOpen('https://nypost.com/horoscopes/');
  console.log('Opened NY Post')



  spooky.then([{x: selectXPath}, function() {
    eval(x);
    return this.click(xPath('//a[text()[contains(.,"Leo")]]'), function () {
      console.log('Redirecting to ' + this.getCurrentUrl()); // Use this.log inside spooky
    });
  }]);
  spooky.then(function() {
    console.log('Getting NYPOST text');
    contentNYP = this.fetchText('#article-wrapper > div.box.article > div > div.entry-content > p');
    console.log(contentNYP);

    this.emit('analyzeContentNYP', contentNYP)
  });


  spooky.run();
});




spooky.on('error', function (e, stack) {
  console.error(e);

  if (stack) {
    console.log(stack);
  }
});

// Uncomment for extra debug information
/*spooky.on('console', function (line) {
  console.log(line);
});*/

spooky.on('log', function (log) {
  if (log.space === 'remote') {
    console.log(log.message.replace(/ \- .*/, ''));
  }
});

spooky.on('analyzeContentBe', function (contentBe) {
  // Keep all content-examining code for BETCHES here, 
  // called from Spooky
  /*
  var index = 1;
  var newArr;
  var contentBet = contentBe.split(" ");
  console.log("length: " + contentBet.length);

  for (var i = 0; i < contentBet.length; i++) {
    if (contentBet[i].includes('Leo')) {
      for (var j = index; j < contentBet.length; j++) {
        if (contentBet[j].includes('Virgo')) {
          break;
        }
        newArr.push(contentBet[j]);
      }
    }
    index ++;
  }
  console.log(index);
  */
  /*
  var source = contentBe;
  var result = source.match(/'Leo'(.*)'Virgo'/);
  console.log(result);*/
  contentBetches = contentBe.split(" ");
  console.log('Betches Content!:', contentBetches);
})

spooky.on('analyzeContentNY', function (contentNY) {
  // Keep all content-examining code for NY here, 
  // called from Spooky
  contentNYD = contentNY.split(" ");
  var newArr;
    for (var i = 0; i < contentNYD.length; i++) {
     // console.log("parsing");
      newArr.push(contentNYD[i])
      if (contentNYD[i + 1] == 'Eric') {
        break;
      }
     }

  console.log('NY Daily content!:', newArr);
})

spooky.on('analyzeContentAstr', function (contentAstr) {
  // Keep all content-examining code for ASTR here, 
  // called from Spooky
  contentAstrology = contentAstr.split(" ");
  document.getElementById("dailyHoroscopeText").innerHTML = 'Astr content!: ' + contentAstrology;
  console.log('Astr content!:', contentAstrology);
})

spooky.on('analyzeContentElle', function (contentElle) {
  // Keep all content-examining code for ASTR here, 
  // called from Spooky
  contentEl = contentElle.split(" ");
  console.log('Elle content!:', contentEl);
})

spooky.on('analyzeContentNYP', function (contentNYP) {
  // Keep all content-examining code for ASTR here, 
  // called from Spooky
  contentNYPost = contentNYP.split(" ");


  console.log('NY Post content!:', contentNYPost);
})





