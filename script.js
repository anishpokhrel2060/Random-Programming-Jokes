//variabe containing various programming jokes.
const jokesOnProgramming = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "How do you comfort a JavaScript bug? You console it.",
    "Why was the developer broke? Because he used up all his cache.",
    "Why do Java developers wear glasses? Because they don't C#.",
    "What’s a programmer’s favorite hangout place? Foo Bar.",
    "Why did the programmer quit his job? Because he didn’t get arrays.",
    "How many programmers does it take to change a light bulb? None. It’s a hardware problem.",
    "Why do Python developers prefer their jokes? They're high-level.",
    "Why did the programmer go broke? Because he lost his domain in a bet.",
    "Why was the computer cold? It left its Windows open.",
    "Why did the database administrator break up with their partner? They couldn't commit.",
    "Why did the programmer cross the road? To implement a better algorithm.",
    "Why do programmers hate nature? Too many bugs.",
    "What is a programmer’s favorite style of music? Algo-rhythm.",
    "Why was the function sad? Because it wasn’t called.",
    "Why do programmers prefer cats over dogs? Cats have nine lives, but recursion has infinite.",
    "What do you call a developer who never finishes their work? A procrastinator pattern.",
    "Why was the JavaScript developer sad? Because they couldn’t find their ‘this’.",
    "What do you call 8 hobbits? A hobbyte.",
    "Why do coders make bad partners? They always push to GitHub.",
    "Why do programmers hate surprises? They don’t like unhandled exceptions.",
    "What’s a programmer’s favorite tool? Debugger—it’s a real lifesaver.",
    "Why did the computer break up with the internet? There was no connection.",
    "Why don’t programmers like sports? Too many breaks.",
    "Why are assembly programmers often lonely? Because they have no class.",
    "Why do programmers prefer to work at night? Because the debugging is easier.",
    "Why did the backend developer become a gardener? They wanted to work with 'roots'.",
    "How does a programmer open a jar? They use the right key.",
    "What do you get when you cross a programmer with a musician? Algo-rhythm and Blues.",
    "Why are software engineers bad at relationships? They often fail to sync.",
    "What’s a programmer’s favorite workout? Forking and pulling.",
    "Why do programmers prefer coffee? It’s their source of energy.",
    "Why did the coder wear glasses? To improve their perspective.",
    "How do you catch a computer geek? With a boolean trap.",
    "Why do programmers hate recess? Too many loops.",
    "Why do developers never trust stairs? They’re always up to something.",
    "Why did the JavaScript developer break up with their partner? Because they didn't have 'closure'.",
    "Why did the function feel lazy? It needed a callback to complete.",
    "What’s a programmer’s favorite type of food? RAM-en noodles.",
    "What did the computer say to its operator? 'You drive me nuts and bolts!'",
    "Why was the coder always tired? Too many threads running.",
    "What’s a developer’s favorite dessert? Byte-sized cookies.",
    "Why did the coder refuse to eat? They didn’t want to debug their food.",
    "Why did the website break up with the developer? It found someone more responsive.",
    "What’s a coder’s favorite drink? Java.",
    "Why don’t programmers play cards? They fear getting stuck in loops.",
    "Why did the variable become depressed? It couldn’t find its scope.",
    "Why did the server go to therapy? Too much pressure.",
    "What’s a programmer’s favorite dance move? The Boolean shuffle."
  ];

  //this is the function to generate random jokes and return it.
  function generateRandomJokes(){
    const myIndex=Math.floor(Math.random()*jokesOnProgramming.length);
    return jokesOnProgramming[myIndex];
  }

  //function to display random jokes
  function showingJoke() {
    const joke = document.getElementById("jokeHere");
    joke.textContent = generateRandomJokes();
  }

