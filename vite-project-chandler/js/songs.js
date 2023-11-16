const songs = [
    {
        name: "Space Cadet",
        genre: "Rap",
        artist: "Metro Boomin",
        featured: "Gunna"
    },
    
    {
        name: "Drowning",
        genre: "Rap",
        artist: "A Boogie Wit da Hoodie",
        featured: "Kodak Black",
    },
    
    {
        name: "Repeat It",
        genre:"Rap",
        artist:"Lil Tecca",
        featured:"Gunna",
    },
    {
        name: "Hard To Choose One",
        genre:"Rap",
        artist:"Future",
        featured:"",
    },
    {
        name: "Ric Flair Drip",
        genre:"Rap",
        artist:"Offset",
        featured:"Metro Boomin",
    },
    {
        name:"Drip Too Hard",
        genre:"Rap",
        artist:"Lil Baby",
        featured:"Gunna",
    },
    {
        name:"Ransom",
        genre:"Rap",
        artist:"Lil Tecca",
        featured:"",
    },
    {
        name:"Puffin On Zootiez",
        genre:"Rap",
        artist:"Future",
        featured:"",
    },
    {
        name:"Life is Good",
        genre:"Rap",
        artist:"Future",
        featured:"",
    },
    {
        name:"Mask Off",
        genre:"Rap",
        artist:"Future",
        featured:"",
    },
    {
        name:"Middle Child",
        genre:"Rap",
        artist:"J.Cole",
        featured:"",
    },
    {
        name:"Pure Cocaine",
        genre:"Rap",
        artist:"Lil Baby",
        featured:"",
    },
    {
        name:"back at it",
        genre:"Rap",
        artist:"Gunna",
        featured:"",
    },
    {
        name:"I KNOW?",
        genre:"Rap",
        artist:"Travis Scott",
        featured:"",
    },
    {
        name:"500lbs",
        genre:"Rap",
        artist:"Lil Tecca",
        featured:"",
    },
    {
        name:"2 Phones",
        genre:"Rap",
        artist:"Kevin Gates",
        featured:"",
    },
    {
        name:"Highest in the Room",
        genre:"Rap",
        artist:"Travis Scott",
        featured:"",
    },
    {
        name: "greedy",
        genre:"Pop",
        artist:"Tate McRae",
        featured:"",
    },
    {
        name: "alright",
        genre: ["R&B","Pop","lo-fi"],
        artist:"Keshi",
        featured:"",
    },
    {
        name: "2 soon",
        genre:["R&B","Pop","lo-fi"],
        artist:"Keshi",
        featured:"",
    },
    {
        name: "onoffonoff",
        genre:["R&B","Pop","lo-fi"],
        artist:"Keshi",
        featured:"",
    },
    {
        name: "deja vu",
        genre:"Pop",
        artist:"Olivia Rodrigo",
        featured:"",
    },
    {
        name:"Home for the Summer",
        genre:"Pop",
        artist:"Sara Kays",
        featured:"",
    },
    {
        name:"Apocalypse",
        genre:"Alternative",
        artist:"Cigarettes After Sex",
        featured:"",
    },
    {
        name:"the reaper",
        genre:["R&B","Pop","lo-fi"],
        artist:"Keshi",
        featured:"",
    },
    
    {
        name:"skeletons",
        genre:["R&B","Pop","lo-fi"],
        artist:"Keshi",
        featured:"",
    },
    {
        name:"like i need u",
        genre:["R&B","Pop","lo-fi"],
        artist:"Keshi",
        featured:"",
    },
    {
        name:"favorite crime",
        genre:"Pop",
        artist:"Olivia Rodrigo",
        featured:"",
    },
    {
        name:"good 4 u",
        genre:"Pop",
        artist:"Olivia Rodrigo",
        featured:"",
    },
    {
        name:"enough for you",
        genre:"Pop",
        artist:"Olivia Rodrigo",
        featured:"",
    },
    {
        name:"Devil Town",
        genre:"Alternative",
        artist:"Cavetown",
        featured:"",
    },
    {
        name:"Juliet",
        genre:"Alternative",
        artist:"Cavetown",
        featured:"",
    },
    {
        name:"Boys Will Be Bugs",
        genre:"Alternative",
        artist:"Cavetown",
        featured:"",
    },
    {
        name:"Sweet Tooth",
        genre:"Alternative",
        artist:"Cavetown",
        featured:"",
    },
    {
        name:"Meteor Shower",
        genre:"Alternative",
        artist:"Cavetown",
        featured:"",
    },
    {
        name:"Into It",
        genre:"Alternative",
        artist:"Chase Atlantic",
        featured:"",
    },
    {
        name:"Swim",
        genre:"Alternative",
        artist:"Chase Atlantic",
        featured:"",
    },
    {
        name:"Slow Down",
        genre:"Alternative",
        artist:"Chase Atlantic",
        featured:"",
    },
    {
        name:"Drugs & Money",
        genre:"Alternative",
        artist:"Chase Atlantic",
        featured:"",
    },
    {
        name:"Right Here",
        genre:"Alternative",
        artist:"Chase Atlantic",
        featured:"",
    },
    {
        name:"Numb to the Feeling",
        genre:"Alternative",
        artist:"Chase Atlantic",
        featured:"",
    },
    {
        name:"Cassie",
        genre:"Alternative",
        artist:"Chase Atlantic",
        featured:"",
    },
    {
        name: "Go Hard",
        genre: "K-pop",
        artist: "Twice",
    },
    {
        name: "Perfect Night",
        genre:"K-pop",
        artist:"Le Sserafim",
        featured:"",
    },
    {
        name:"Talk that Talk",
        genre:"K-pop",
        artist:"Twice",
        featured:"",
    },
    {
        name:"Set Me Free",
        genre:"K-pop",
        artist:"Twice",
        featured:"",
    },
    {
        name:"I Can't Stop Me",
        genre:"K-pop",
        artist:"Twice",
        featured:"",
    },
    {
        name:"Brave",
        genre:"K-pop",
        artist:"Twice",
        featured:"",
    },
    {
        name:"Antifragile",
        genre:"K-pop",
        artist:"Le Sserafim",
        featured:"",
    },
    {
        name:"Some",
        genre:"K-pop",
        artist:"BOL4",
        featured:"",
    },
    {
        name:"Fine",
        genre:"K-pop",
        artist:"Taeyeon",
        featured:"",
    },
    {
        name:"副驾驶",
        genre:"Chinese Pop",
        artist:"HomeBoy叶枫华",
        featured:"",
    },
    {
        name:"朝九晚五",
        genre:"Chinese Pop",
        artist:"HomeBoy叶枫华",
        featured:"",
    },
    {
        name:"带薪假期",
        genre:"Chinese Pop",
        artist:"HomeBoy叶枫华",
        featured:"",
    },
    {
        name:"广式富豪",
        genre:"Chinese Pop",
        artist:"HomeBoy叶枫华",
        featured:"",
    },

    {
        name:"城市恋人",
        genre:"Chinese Pop",
        artist:"HomeBoy叶枫华",
        featured:"",
    },
    {
        name:"粤语冇嘻哈",
        genre:"Chinese Pop",
        artist:"HomeBoy叶枫华",
        featured:"",
    },
    {
        name:"丢那星",
        genre:"Chinese Pop",
        artist:"HomeBoy叶枫华",
        featured:"",
    },
    {
        name:"Interstellar Main Theme - Piano",
        genre:"Instrumentals",
        artist:"Hans Zimmer",
        featured:"",
    },
    {
        name:"Republic Clone Army March (From 'Star Wars') - Dark Version",
        genre:"Instrumentals",
        artist:"John Williams",
        featured:"",
    },
    {
        name:"The Force Theme (From 'Star Wars') - Piano Version",
        genre:"Instrumentals",
        artist:"John Williams",
        featured:"",
    },
    {
        name:"The Imperial March (Darth Vader's Theme)",
        genre:"Instrumentals",
        artist:"John Williams",
        featured:"",
    },
    {
        name:"Duel of the Fates",
        genre:"Instrumentals",
        artist:"John Williams",
        featured:"",
    },
    {
        name:"Cantina Band",
        genre:"Instrumentals",
        artist:"John Williams",
        featured:"",
    },
    {
        name:"Theme from Jurrasic Park",
        genre:"Instrumentals",
        artist:"John Williams",
        featured:"",
    },
    {
        name:"Cornfield Chase",
        genre:"Instrumentals",
        artist:"Hans Zimmer",
        featured:"",
    },
]
export {songs};