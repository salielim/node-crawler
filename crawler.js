var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        } else {
            var $ = res.$; // $ is Cheerio by default
            console.log("URL: " + res.request.uri.href);
            console.log("Title: " + $("title").text());
            console.log("Meta Description: " + $("meta[name='description']").attr('content'));
            console.log("H1: " + $("h1").text());
            console.log("H2: " + $("h2").text());
            console.log("---------");
        }

        var httpReg = new RegExp(/http|www/);
        var symbReg = new RegExp(/#|%|\?|:/);
        $("a").each(function(index,a) {
            var hrefAttr = $(a).attr('href');
            if (hrefAttr==undefined) {
                // if ahref value is undefined, skip it
                //console.log("undefined URL slug");
            } else if (hrefAttr.match(symbReg)) {
                // if ahref value contains #, % or ?, skip it
                //console.log("slug contains symbols");
            } else if (hrefAttr.match(httpReg)) {
                // if ahref value is full url (contains http), pop into queue
                //console.log("full url: " + hrefAttr);
                var fullUrl = domainName;
                c.queue(fullUrl);
            } else {
                // if ahref value is the slug, concatenate with domain address before popping into queue
                //console.log("slug only: " + domainName + hrefAttr);
                var fullUrl = domainName + hrefAttr;
                c.queue(fullUrl);
            }
        });
        done();
    }
});

domainName = "https://en.wikipedia.org"
c.queue(domainName);