// ---------------- variables -----------------------------------
const btn = document.getElementById('new-quote');
const quotes = document.querySelector('.quotes');
const saidBy = document.querySelector('.said-by');


// ---------------- Quotes Libraray ------------------------------
const quotesLibrary = [{ 
    quotes: "Don’t just read the easy stuff. You may be entertained by it, but you will never grow from it.",
    saidBy: " Jim Rohn"
}, {
    quotes: "Don’t say, ‘If I could, I would.’ Say, ‘If I can, I will.",
    saidBy: " Jim Rohn"
}, {
    quotes: "The way to get started is to quit talking and begin doing.",
    saidBy: "Walt Disney"
}, {
    quotes: "If you spend too much time thinking about a thing, you'll never get it done.",
    saidBy: "Bruce Lee"
}, {
    quotes: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
    saidBy: 'Helen Keller'
}, {
    quotes: 'The best preparation for tomorrow is doing your best today.',
    saidBy: 'H. Jackson Brown, Jr'
}, {
    quotes: "Believe you can and you're halfway there.",
    saidBy: 'Theodore Roosevelt'
}, {
    quotes: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    saidBy: 'Jimmy Dean'
}, {
    quotes: 'It is during our darkest moments that we must focus to see the light.',
    saidBy: 'Aristotle Onassis'
}, {
    quotes: "When you have a dream, you've got to grab it and never let go",
    saidBy: 'Carol Burnett'
}, {
    quotes: 'Action is the foundational key to all success.',
    saidBy: 'Pablo Picasso'
}, {
    quotes: 'Your attitude, not your aptitude, will determine your altitude.',
    saidBy: 'Zig Ziglar'
}, {
    quotes: 'Adopting the right attitude can convert a negative stress into a positive one.',
    saidBy: 'Hans Selye'
}, {
    quotes: "Sir, my concern is not whether God is on our side; my greatest concern is to be on God's side, for God is always right.",
    saidBy: 'Abraham Lincoln'
}, {
    quotes: 'Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.',
    saidBy: 'Steve Jobs'
}, {
    quotes: 'Stay hungry, stay foolish',
    saidBy: 'Steve Jobs'
}, {
    quotes: 'Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.',
    saidBy: 'A. P. J. Abdul Kalam'
}, {
    quotes: 'If you want to shine like a sun, first burn like a sun.',
    saidBy: 'A. P. J. Abdul Kalam'
},{
    quotes: 'Never stop fighting until you arrive at your destined place - that is, the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realise the great life.',
    saidBy: 'A. P. J. Abdul Kalam'
}, {
    quotes: 'To succeed in your mission, you must have single-minded devotion to your goal.',
    saidBy: 'A. P. J. Abdul Kalam'
}, {
    quotes: 'Excellence is a continuous process and not an accident.',
    saidBy: 'A. P. J. Abdul Kalam'
}, {
    quotes: 'Where there is righteousness in the heart, there is beauty in the character. When there is beauty in the character, there is harmony in the home. When there is harmony in the home, there is order in the nation. When there is order in the nation, there is peace in the world.',
    saidBy: 'A. P. J. Abdul Kalam'
}, {
    quotes: 'If four things are followed - having a great aim, acquiring knowledge, hard work, and perseverance - then anything can be achieved.',
    saidBy: 'A. P. J. Abdul Kalam'
}, {
    quotes: 'Let me define a leader. He must have vision and passion and not be afraid of any problem. Instead, he should know how to defeat it. Most importantly, he must work with integrity.',
    saidBy: 'A. P. J. Abdul Kalam'
}, {
    quotes: 'Small aim is a crime; have great aim.',
    saidBy: 'A. P. J. Abdul Kalam'
}, {
    quotes: 'You see, God helps only people who work hard. That principle is very clear.',
    saidBy: 'A. P. J. Abdul Kalam'
}, {
    quotes: 'Apart from values and ethics which I have tried to live by, the legacy I would like to leave behind is a very simple one - that I have always stood up for what I consider to be the right thing, and I have tried to be as fair and equitable as I could be.',
    saidBy: 'Ratan Tata'
}, {
    quotes: 'Positive thinking will let you do everything better than negative thinking will.',
    saidBy: 'Zig Ziglar'
}, {
    quotes: 'Always turn a negative situation into a positive situation.',
    saidBy: 'Michael Jordan'
}, {
    quotes: 'A strong, positive self-image is the best possible preparation for success.',
    saidBy: 'Joyce Brothers'
}, {
    quotes: 'Quality is not an act, it is a habit.',
    saidBy: 'Aristotle'
}, {
    quotes: 'When something is important enough, you do it even if the odds are not in your favor.',
    saidBy: 'Elon Musk'
}, {
    quotes: 'Great companies are built on great products.',
    saidBy: 'Elon Musk'
}, {
    quotes: 'It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.',
    saidBy: 'Mark Twain'
}, {
    quotes: 'The only true wisdom is in knowing you know nothing',
    saidBy: 'Socrates'
}, {
    quotes: 'The main thing is to keep the main thing the main thing',
    saidBy: 'Stephen Covey'
}, {
    quotes: 'There are three constants in life... change, choice and principles',
    saidBy: 'Stephen Covey'
}, 
]


// --------------------- Event listeners ---------------------------
function changeQuote() {
    console.log('hiiiiiiiiii')
    let randomQuote = Math.floor(Math.random() * quotesLibrary.length);

    quotes.textContent = quotesLibrary[randomQuote].quotes;
    saidBy.innerText = quotesLibrary[randomQuote].saidBy;
}

console.log(saidBy)

// --------------------- Event listeners ---------------------------
btn.addEventListener('click', changeQuote);


