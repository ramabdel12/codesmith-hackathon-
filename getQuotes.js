const q = "Sample";

let quote = document.createElement("div");
document.body.appendChild(quote)


//This is inspirational quote from API
fetch('https://type.fit/api/quotes')
    .then(response=>response.json())
    .then(data=>{
        let randomQuote= Math.floor(Math.random()* data.length)
        let text = `Here is your quote of day: ${data[randomQuote].text}`
        quote.innerText = text;
        quote.style.color = "blue"
    })

 console.log(summary)

 //iterate and return array via map
//  condition true -green Style
//  conditional false- red style

let keys = Object.keys(summary).forEach(key=>{
    let question= document.createElement("div");
    document.body.appendChild(question);
    question.innerText = key;
    if(summary[key]){
        question.style.color = "green"
    } else{
        question.style.color = "red"
    }
})
console.log(keys)