console.log("lets start our project");


// Array of Quotes

var quotes = ["The Way Get Started Is To Quit Talking And Begin Doing– Walt Disney",
"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.– Winston Churchill",
"Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers",
"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.– Unknown",
"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up. - Vince Lombardi",
"If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.– Steve Jobs",
"People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.– Rob Siltanen",
"Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. – Og Mandino",
"Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur. – Mohnish Pabrai",
"We May Encounter Many Defeats But We Must Not Be Defeated.– Maya Angelou"]


function newQuote(){
var randomnumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomnumber];
}