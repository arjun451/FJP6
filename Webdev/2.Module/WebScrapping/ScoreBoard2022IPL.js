const request = require('request');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const link = "https://sports.ndtv.com/ipl-2022/results";
request(link,cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
    //    console.log(html);

         const dom = new JSDOM(html);
         const document = dom.window.document;
         
    }
}