const { Module } = require("module");

function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mut(a,b)
{
    return a*b;
}
function div(a,b)
{
    return a/b;
}
module.exports={
    Addition:add,
    Substraction:sub,
    Multiplaction:mut,
    Division:div
}