var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        } else {
            var $ = res.$; // $ is Cheerio by default
            console.log("Title: " + $("title").text());
            console.log("Meta Description: " + $("meta[name='description']").attr('content'));
            console.log("H1: " + $("h1").text());
            console.log("H2: " + $("h2").text());
        }
        done();
    }
});

toQueueUrl = [];
site = "https://salielim.com"
c.queue(site);