const quotes=[
    {
        quote:"aaaaaaaaa",
        author:"bbbbbbb",
    },

    {
        quote:"aaaaaaaaabbb",
        author:"bbbbbbbaaaaa",
    },
];

const btn=document.getElementById("generatequote");
const quote=document.getElementById("quote");
const author=document.getElementById("author");

btn.addEventListener("click",()=>{
    let random=Math.floor(Math.random()*quotes.length);
    console.log(quotes.length);
    let generate=quotes[random];
    quote.innerHTML=generate.quote;
    author.innerHTML=generate.author;

})
