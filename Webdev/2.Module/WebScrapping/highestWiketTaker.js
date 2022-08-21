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
        let allBolower = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed");
        // console.log(allBolower.length);
        let ar = ["",-1];
        for(let i=1;i<allBolower.length;i=i+2)
        {
            let row = allBolower[i].querySelectorAll("tbody tr");
            // console.log(row.length);
            for(let j=0;j<row.length;j++)
            {
                let col = row[j].querySelectorAll("td");
                if(col.length>4)
                {
                    let Name = col[0].textContent;
                    let numOfWicket = col[4].textContent;
                    // console.log("Name of bollower--->>",  Name  ,"  Number of wicket---->>",numOfWicket);
                    if(ar[1]<numOfWicket)
                    {
                      ar[0] = Name;
                      ar[1]=numOfWicket;
                    }
                }
            }
        }
        console.log("Highest wicket taker boller: ",ar[0] ," And Number of Wicket is: ",ar[1]);
        

    }
}

