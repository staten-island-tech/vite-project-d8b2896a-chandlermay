const songs = [
    {
        name: "Space Cadet",
        genre: "Rap",
        artist: "Metro Boomin",
        featured: "Gunna",
        image: "https://images.genius.com/6072c7f5f2b9b3a3b3356ac3697ec9e4.1000x1000x1.png"
    },
    
    {
        name: "Drowning",
        genre: "Rap",
        artist: "A Boogie Wit da Hoodie",
        featured: "Kodak Black",
        image: "https://i1.sndcdn.com/artworks-01Mx398PKTW7JCdf-cmObYA-t500x500.jpg"
    },
    
    {
        name: "Repeat It",
        genre:"Rap",
        artist:"Lil Tecca",
        featured:"Gunna",
        image: "https://images.genius.com/bc001d84dcd8a4d874cf078507fe2f9f.1000x1000x1.png"
    },
    {
        name: "Hard To Choose One",
        genre:"Rap",
        artist:"Future",
        featured:"",
        image:"https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fe70b99854ed33641f8743733fb9865a1.1000x1000x1.png"
    },
    {
        name: "Ric Flair Drip",
        genre:"Rap",
        artist:"Offset",
        featured:"Metro Boomin",
        image: "https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F26d950751cbb720da34dbeb732e73b34.300x300x1.jpg"
    },
    {
        name:"Drip Too Hard",
        genre:"Rap",
        artist:"Lil Baby",
        featured:"Gunna",
        image: "https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F4103f03c5192eded4d62ee265efaf484.640x640x1.jpg"
    },
    {
        name:"Ransom",
        genre:"Rap",
        artist:"Lil Tecca",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b273bd69bbde4aeee723d6d08058"
    },
    {
        name:"Puffin On Zootiez",
        genre:"Rap",
        artist:"Future",
        featured:"",
        image: "https://images.genius.com/e14ea3e9d432ebf403c2ee8cf8a6b662.1000x1000x1.png"
    },
    {
        name:"Life is Good",
        genre:"Rap",
        artist:"Future",
        featured:"",
        image: "https://images.squarespace-cdn.com/content/v1/5d210a3c8ae83700013f313b/1580927618068-4B1D5W3JKOKRKS72ND42/life+is+good.png?format=2500w"
    },
    {
        name:"Mask Off",
        genre:"Rap",
        artist:"Future",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b273e0b64c8be3c4e804abcb2696"
    },
    {
        name:"Middle Child",
        genre:"Rap",
        artist:"J.Cole",
        featured:"",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4f/J._Cole_-_Middle_Child.png"
    },
    {
        name:"Pure Cocaine",
        genre:"Rap",
        artist:"Lil Baby",
        featured:"",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e3/5a/18/e35a1802-0e37-9d8c-34a1-c4b38b3b9b6a/18UMGIM77805.rgb.jpg/486x486bb.png"
    },
    {
        name:"back at it",
        genre:"Rap",
        artist:"Gunna",
        featured:"",
        image: "https://images.genius.com/7d031ee415f1615525a9c16b8044a7cd.973x1000x1.png"
    },
    {
        name:"I KNOW?",
        genre:"Rap",
        artist:"Travis Scott",
        featured:"",
        image: "https://images.genius.com/93c577bcd2cce45a2e7063978bcb3b1a.1000x1000x1.png"
    },
    {
        name:"500lbs",
        genre:"Rap",
        artist:"Lil Tecca",
        featured:"",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ac/30/8e/ac308e20-5486-9d95-626b-a79e831c211d/23UM1IM01535.rgb.jpg/486x486bb.png"
    },
    {
        name:"2 Phones",
        genre:"Rap",
        artist:"Kevin Gates",
        featured:"",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/KevinGates2Phones.png/220px-KevinGates2Phones.png"
    },
    {
        name:"Highest in the Room",
        genre:"Rap",
        artist:"Travis Scott",
        featured:"",
        image: "https://images.genius.com/c7db7f8aa2fb7c42e2d0ab7ccd9e9593.1000x1000x1.png"
    },
    {
        name:"Apocalypse",
        genre:"Alternative",
        artist:"Cigarettes After Sex",
        featured:"",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a7/Cigarettes_After_Sex_-_Apocalypse.png"
    },
    {
        name:"Devil Town",
        genre:"Alternative",
        artist:"Cavetown",
        featured:"",
        image: "https://i1.sndcdn.com/artworks-OFaKK5vCM9JJ-0-t500x500.png"
    },
    {
        name:"Juliet",
        genre:"Alternative",
        artist:"Cavetown",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b27317add53ee7ef16ac10e6f8a9"
    },
    {
        name:"Boys Will Be Bugs",
        genre:"Alternative",
        artist:"Cavetown",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b27317add53ee7ef16ac10e6f8a9"
    },
    {
        name:"Sweet Tooth",
        genre:"Alternative",
        artist:"Cavetown",
        featured:"",
        image: "https://images.genius.com/a9263eb89488273df29c4eeb3805ca64.1000x1000x1.png"
    },
    {
        name:"Meteor Shower",
        genre:"Alternative",
        artist:"Cavetown",
        featured:"",
        image: "https://f4.bcbits.com/img/a4041871804_10.jpg"
    },
    {
        name:"Into It",
        genre:"Alternative",
        artist:"Chase Atlantic",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b2735a0c2870f4f309e382d1fad6"
    },
    {
        name:"Swim",
        genre:"Alternative",
        artist:"Chase Atlantic",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b2735a0c2870f4f309e382d1fad6"
    },
    {
        name:"Slow Down",
        genre:"Alternative",
        artist:"Chase Atlantic",
        featured:"",
        image: "https://i.pinimg.com/736x/f7/2d/78/f72d7876e70f88854595db4878c97756.jpg"
    },
    {
        name:"Drugs & Money",
        genre:"Alternative",
        artist:"Chase Atlantic",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b273b070b746371a4196c1204a5b"
    },
    {
        name:"Right Here",
        genre:"Alternative",
        artist:"Chase Atlantic",
        featured:"",
        image: "https://i1.sndcdn.com/artworks-kCDiqeOpv5Y7-0-t500x500.jpg"
    },
    {
        name:"Numb to the Feeling",
        genre:"Alternative",
        artist:"Chase Atlantic",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b2735afaf7e27ea93611a533f0db"
    },
    {
        name:"Cassie",
        genre:"Alternative",
        artist:"Chase Atlantic",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b273bbc49b300f5db9272a41d2b7"
    },
    {
        name: "Go Hard",
        genre: "K-pop",
        artist: "Twice",
        image: "https://images.genius.com/20fc56eba239dc14cfde7df9f4fc3987.900x900x1.png"
    },
    {
        name: "Perfect Night",
        genre:"K-pop",
        artist:"Le Sserafim",
        featured:"",
        image: "https://static.wikia.nocookie.net/kpop/images/f/fe/LE_SSERAFIM_Perfect_Night_album_cover.png/revision/latest?cb=20231027184333"
    },
    {
        name:"Talk that Talk",
        genre:"K-pop",
        artist:"Twice",
        featured:"",
        image: "https://images.genius.com/0e84450ae339064d367d2333d19c24fe.1000x1000x1.png"
    },
    {
        name:"Set Me Free",
        genre:"K-pop",
        artist:"Twice",
        featured:"",
        image: "https://twiceshop.com/cdn/shop/products/setmefreeremixes.png?v=1678899188"
    },
    {
        name:"I Can't Stop Me",
        genre:"K-pop",
        artist:"Twice",
        featured:"",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/680681ea-76ed-4371-8170-ee2d389a49be/de7mhyb-2a4a1126-af70-4c69-8cdb-89ab0ec94a60.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY4MDY4MWVhLTc2ZWQtNDM3MS04MTcwLWVlMmQzODlhNDliZVwvZGU3bWh5Yi0yYTRhMTEyNi1hZjcwLTRjNjktOGNkYi04OWFiMGVjOTRhNjAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.COvPGBYJ39AwjQJ48P2mDnCTLP1M9fCEfneEyZZ0JFs"
    },
    {
        name:"Brave",
        genre:"K-pop",
        artist:"Twice",
        featured:"",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/680681ea-76ed-4371-8170-ee2d389a49be/dfu3db9-74ac36f1-c0fb-4163-aa50-19105d4c9d14.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY4MDY4MWVhLTc2ZWQtNDM3MS04MTcwLWVlMmQzODlhNDliZVwvZGZ1M2RiOS03NGFjMzZmMS1jMGZiLTQxNjMtYWE1MC0xOTEwNWQ0YzlkMTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SvxEV1WLWXZi4AggUw4EOuVcwmw323G3AlvLLEIe-S4"
    },
    {
        name:"Antifragile",
        genre:"K-pop",
        artist:"Le Sserafim",
        featured:"",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e6/Le_Sserafim_-_Antifragile.png"
    },
    {
        name:"Some",
        genre:"K-pop",
        artist:"BOL4",
        featured:"",
        image: "https://www.crownnote.com/sites/default/files/styles/large/public/532859/Bolbbalgan4%20To%20My%20Youth.png.png.png.webp?itok=XqRlEkfr"
    },
    {
        name:"Fine",
        genre:"K-pop",
        artist:"Taeyeon",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b2738c7e7f435fdcc70772c5555e"
    },
    {
        name:"副驾驶",
        genre:"Chinese Pop",
        artist:"HomeBoy叶枫华",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b27305911091c658192ddab85bdd"
    },
    {
        name:"朝九晚五",
        genre:"Chinese Pop",
        artist:"HomeBoy叶枫华",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b27359097588e2753581f4773235"
    },
    {
        name:"带薪假期",
        genre:"Chinese Pop",
        artist:"HomeBoy叶枫华",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b27359097588e2753581f4773235"
    },
    {
        name:"广式富豪",
        genre:"Chinese Pop",
        artist:"HomeBoy叶枫华",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b2739c7ff751e00b4a9bba8c1529"
    },
    {
        name:"城市恋人",
        genre:"Chinese Pop",
        artist:"HomeBoy叶枫华",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b27359097588e2753581f4773235"
    },
    {
        name:"粤语冇嘻哈",
        genre:"Chinese Pop",
        artist:"HomeBoy叶枫华",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d00001e022430d8a8260ea7c8c45629c6"
    },
    {
        name:"丢那星",
        genre:"Chinese Pop",
        artist:"HomeBoy叶枫华",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b2735a45eb8628b5a5046f5c80a2"
    },
    {
        name:"Interstellar Main Theme - Piano",
        genre:"Instrumentals",
        artist:"Hans Zimmer",
        featured:"",
        image: "https://anakin022.files.wordpress.com/2014/11/interstellar121.jpg"
    },
    {
        name:"Republic Clone Army March",
        genre:"Instrumentals",
        artist:"John Williams",
        featured:"",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5b/bf/fa/5bbffaef-3dc9-a410-3d76-3670eedd787a/198001761102.png/600x600bf-60.jpg"
    },
    {
        name:"The Force Theme - Piano Version",
        genre:"Instrumentals",
        artist:"John Williams",
        featured:"",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/de/0e/08/de0e0895-dc1e-f118-ffb6-5232e241068d/198000036089.jpg/1200x1200bb.jpg"
    },
    {
        name:"The Imperial March",
        genre:"Instrumentals",
        artist:"John Williams",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d0000b2737cba36fe491c113e89562cc6"
    },
    {
        name:"Duel of the Fates",
        genre:"Instrumentals",
        artist:"John Williams",
        featured:"",
        image: "https://i.scdn.co/image/ab67616d00001e02aac864ff7174329862dcf0ae"
    },
    {
        name:"Cantina Band",
        genre:"Instrumentals",
        artist:"John Williams",
        featured:"",
        image: "https://i.etsystatic.com/12154873/r/il/3811f3/2461635023/il_fullxfull.2461635023_pi7c.jpg"
    },
    {
        name:"Theme from Jurrasic Park",
        genre:"Instrumentals",
        artist:"John Williams",
        featured:"",
        image: "https://i.ytimg.com/vi/lDlU08RU7Tk/maxresdefault.jpg"
    },
    {
        name:"Cornfield Chase",
        genre:"Instrumentals",
        artist:"Hans Zimmer",
        featured:"",
        image: "https://i1.sndcdn.com/artworks-000535278435-rvyk54-t500x500.jpg"
    },
]
export {songs};