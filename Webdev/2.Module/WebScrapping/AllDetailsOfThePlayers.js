//Basic required tools
const request = require('request');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const link="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";
//find the html content
request(link,cb);

function cb(error , response, html)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        // console.log(html);
        const dom = new JSDOM(html);
        const document  = dom.window.document;
        let allPlayer = document.querySelectorAll(".ds-w-full.ds-table.ds-table-md.ds-table-auto.ci-scorecard-table tbody tr td a");
        console.log(allPlayer.length);
         
         for(let i=0;i<allPlayer.length;i++)
         {
            // console.log(allPlayer[i].textContent+" --->",allPlayer[i].href);
            let playerLink = "https://www.espncricinfo.com"+allPlayer[i].href;
            // console.log(playerLink);
            request(playerLink,cb2);

         }
       

    }
}

function cb2(error,response,html)
{
    if(error)
    {
      console.log(error);
    }
    else{  
        //  console.log(html);
       
         const dom = new JSDOM(html);
         const document = dom.window.document;
         let playerInformation = document.querySelectorAll(".ds-text-title-s.ds-font-bold.ds-text-ui-typo h5");

         console.log("Name :"+playerInformation[0].textContent,  " DOB :"+playerInformation[1].textContent);
        
    }
}