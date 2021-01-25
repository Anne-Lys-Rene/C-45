var ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8, ques9, ques10;

var gameState = 0;

var backgroundimg;

function preload(){
    backgroundimg = loadImage ("oneTreeHill.jpg");
}

function setup(){
    createCanvas (displayWidth - 10, displayHeight - 30);
    ques1 = new question ("When did Haley and Nathan get Married ?", "Senior Year", "After High School", "After Jamie's birth", "First Year of College", 1);
    ques2 = new question ("Who played Lucas Scott ?", "James Lafferty", "Paul Johansson", "Chad Michael Murray", "Austin Nicholas", 3);
    ques3 = new question ("Who did Dan Scott kill ?", "Chris Keller", "Keith Scott", "Chase Adam", "Clay Evans", 2);
    ques4 = new question ("What did Karen name Keith and her child?", "Jamie Scott", "Sam Walker", "Chuck Scolick", "Lily Roe Scott", 4);
    ques5 = new question ("Which season and episode did Lucas and Peyton get married ?", "Season 4,Episode 10", "Season 3, Episode 21", "Season 6, Episode 24", "Season 7, Episode 15", 3);
    ques6 = new question ("Who did Brooke Davis bring to the wedding of Lucas and Peyton?", "Owen Morello","Julian Backer","Nick Lachey","Chris Keller", 3);
    ques7 = new question ("Who beated up Brooke Davis ?", "Xavier", "Dan Scott", "Debora Scott", "Rachel Gatina", 1);
    ques8 = new question ("What was Haley's and Nathan second child name ?", "Victoria Scott","Lily Roe Scott", "Rachel Gatina", "Lydia Scott", 2);
    ques9 = new question ("What was the title of the 1st season 2nd episode", "The Living Years", "I Shall Believe" ,"The Places You Have Come To Fear The Most", "To Wish Impossible Things", 3);
    ques10 = new question ("What is the title of the theme song ?", "I Don't Want to Be , by Gavin DeGraw", "Don't Dream It's Over, by Crowed House", "Don't Confess, by Teagan and Sara", "I Don't Want to Miss a Thing, by Aerosmith", 1);
}

function draw(){
    if(World.frameCount < 20){
        background(backgroundimg);   
    }
    background("black");
    ques1.display();
    
}