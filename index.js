const request = require('request');
const cheerio = require('cheerio');


request('https://www.naver.com', function(err, res, body){
    if(err){
        console.log(err);
        return;
    }

    $ = cheerio.load(body);
    let list = $(".ah_roll_area > .ah_l > li > a > .ah_k");

    [].forEach.call(list, x => {
        //console.log(x.children[0].data);
        console.log($(x).text());
    });

    for(let i = 0; i < list.length; i++){
        //console.log(list[i].children[0].data);
    }
    
});