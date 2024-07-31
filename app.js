const btn = document.getElementById('new-quote');
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes =[
    {
        quote: "All that we are is the result of what we have thought.",
        person:"Buddha",
    },
    {
        quote: "The unexamined life is not worth living.",
        person:"Socrates",
    },
    {
        quote: "Know thyself.",
        person:"Ancient Greek aphorism",
    },
    {
        quote: "Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.",
        person:"Ralph Waldo Emerson",
    },
    {
        quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character.",
        person:"Martin Luther King Jr",
    },
    {
        quote: "I think, therefore I am.",
        person:"René Descartes",
    },
    {
        quote: "Give me liberty or give me death!",
        person:"Patrick Henry",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person:"Nelson Mandela",
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        person:"Aristotle",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
        person:"Steve Jobs",
    },
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
});