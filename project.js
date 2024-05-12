let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.Quote');
let person = document.querySelector('.person');
const quotes = [
    {
        quote: "The best way to find yourself is to lose yourself in the service of others.",
        person: "Mahatma Gandhi"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        person: "Oscar Wilde"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        person: "Abraham Lincoln"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        person: "Wayne Gretzky"
    },
    {
        quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
        person: "Edmund Burke"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: It goes on.",
        person: "Robert Frost"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        person: "Mahatma Gandhi"
    }
];
 btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length)
    
quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;
 })