const request = require('request');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const fs = require('fs');
let xlsx = require("json-as-xlsx")

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-schedule-fixtures-and-results";
request(link,cb);
let leaboard = [];
let count=0;
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
    const document  = dom.window.document;
         let matchTag = document.querySelectorAll(".ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent a");
        //  console.log(matchTag.length);
         for(let i=0;i<matchTag.length;i=i+7)
         {
            let matchLink = matchTag[i].href;
            // console.log(i+" index "+matchLink);
            let completeUrl = "https://www.espncricinfo.com"+matchLink;
            // console.log(completeUrl);
            request(completeUrl,cb2);
            count++; 
         }
        

    }
}
function cb2(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        const dom1 = new JSDOM(html);
        const document1 = dom1.window.document;
        let playerList = document1.querySelectorAll(".ds-w-full.ds-table.ds-table-md.ds-table-auto.ci-scorecard-table tbody tr");
        // console.log(playerList.length);
       for(let i=0;i<playerList.length;i++)
       {
          let playerAttribute = playerList[i].querySelectorAll("td");
        //   console.log(playerAttribute.length);
        if(playerAttribute.length==8||playerAttribute.length==7)
        {
            let name = playerAttribute[0].textContent;
            let runs = playerAttribute[2].textContent;
            let balls = playerAttribute[3].textContent;
            let fours = playerAttribute[5].textContent;
            let sixes = playerAttribute[6].textContent;
            // console.log("Player_Name "+name, ", Run "+run," ,ball "+ball, " ,No4s "+No4S," ,No6s "+No6s);
            processPlayer(name,runs,balls,fours,sixes);
           
            // console.log(leaboard);
        }

       }
       
       count--;
        if(count==0)
        {
            // console.log(leaboard);
            let Josndata = JSON.stringify(leaboard);
            // fs.writeFileSync("LeaderboardFile.json",data);
            leaboard.sort((a, b) => b.Runs - a.Runs);
            let data = [
                {
                  sheet: "LeaderBoard",
                  columns: [
                    { label: "Name", value: "Name" }, // Top level data
                    { label: "Innings", value:  "Innings" }, // Custom format
                    { label: "Runs", value: "Runs"}, // Run functions
                    {label:"Balls",value:"Balls"},
                    {label:"Fours",value:"Fours"},
                    {label:"Sixes",value:"Sixes"},
                    
                  ],
                  content:leaboard
                }
              ]
              
              let settings = {
                fileName: "IPL", // Name of the resulting spreadsheet
                extraLength: 3, // A bigger number means that columns will be wider
                writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
              }
              
              xlsx(data, settings)
        }
    }
}

function processPlayer(name,runs,balls,fours,sixes)
{
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);
    for(let i=0;i<leaboard.length;i++)
    {
        let playerObj = leaboard[i];
        if(playerObj.Name == name)
        {
            playerObj.Runs+=runs;
            playerObj.Balls+=balls;
            playerObj.Fours+=fours;
            playerObj.Sixes+=sixes;
            playerObj.Innings+=1;
            return ;
        }
    }
    let obj = {
        Name :name,
        Runs :runs,
        Balls : balls,
        Fours :fours,
        Sixes :sixes,
        Innings:1
    }
    leaboard.push(obj);
}
 
