const request = require('request');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const link = "https://www.iplt20.com/match/2022/528";

request(link,cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        const dom = new JSDOM(html);
        const doc = dom.window.document;
        let teamScore = doc.querySelectorAll("div");
        for(let i=0;i<teamScore.length;i++)
        {
         console.log(teamScore[i].textContent);
        }

    }
}