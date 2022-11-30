//local reviews data
const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img: "./assets/image/picture1.png",
        text: "A Web Developer is a professional who is responsible for the design and construction of websites. They ensure that sites meet user expectations by ensuring they look good, run smoothly and offer easy access points with no loading issues between pages or error messages.",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: "./assets/image/picture2.png",
        text: "This Web Developer job description sample template is optimized for advertising for a website developer on online job boards or careers pages. It is easy to customize with key duties and responsibilities. Feel free to modify this posting to a web designer job description, or for your specific needs.",
    },
    {
        id: 3,
        name: "Jordan Abram",
        job: "UX UI",
        img: "./assets/image/picture3.png",
        text: "We are looking for an outstanding Web Developer to be responsible for the coding, innovative design and layout of our website. Web developer responsibilities include building our website from concept all the way to completion from the bottom up, fashioning everything from the home page to site layout and function.",
    },
    {
        id: 4,
        name: "Hamets Michael",
        job: "Backend Developer",
        img: "./assets/image/picture4.png",
        text: "Write well designed, testable, efficient code by using best software development practices. Create website layout/user interface by using standard HTML/CSS practices. Integrate data from various back-end services and databases. Gather and refine specifications and requirements based on technical needs.",
    },
    {
        id: 5,
        name: "Salva Zedicus",
        job: "Cloud Developer",
        img: "./assets/image/picture5.png",
        text: "Be responsible for maintaining, expanding, and scaling our site. Stay plugged into emerging technologies/industry trends and apply them into operations and activities. Cooperate with web designers to match visual design intent. Proven working experience in web programming.",
    },
    {
        id: 6,
        name: "Mark Festus",
        job: "Network Engineer",
        img: "./assets/image/picture6.png",
        text: "Familiarity with at least one of the following programming languages: PHP, ASP.NET, Javascript or Ruby on Rails. A solid understanding of how web applications work including security, session management, and best development practices.Adequate knowledge of relational database systems.",
    },
]

// select items
const img = document.querySelector("#person-img")
const author = document.querySelector("#author")
const job = document.querySelector("#job")
const info = document.querySelector("#info")

const prevBtn = document.querySelector("#previous-btn")
const nextBtn = document.querySelector("#next-btn")
const randomBtn = document.querySelector("#random-btn") 

let showPerson = ()=>{
    let item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

let getRandomItem = ()=>{
    return Math.floor(Math.random()*reviews.length)
}
//intialize the item:
let currentItem = 2

//load the first item:
window.addEventListener("DOMContentLoaded",()=>{
    showPerson()
})
nextBtn.addEventListener("click", ()=>{
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson()
})
prevBtn.addEventListener("click", ()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length -1
    }
    showPerson()
})

randomBtn.addEventListener("click", ()=>{
    currentItem = getRandomItem()
    showPerson()
})









// //set starting item
// let currentItem = 0

// let getRandomItem = ()=>{
//     return Math.floor(Math.random()*reviews.length)
// }

// let showPerson=()=>{
//     let item = reviews[currentItem]
//     img.src = item.img
//     author.textContent = item.name
//     job.textContent = item.job
//     info.textContent = item.text
// }

// window.addEventListener("DOMContentLoaded",()=>{
//     showPerson()
// })

// randomBtn.addEventListener("click", ()=>{
//     currentItem = getRandomItem()
//     showPerson()
// })
// nextBtn.addEventListener("click",()=>{
//     currentItem++
//     if(currentItem > reviews.length - 1){
//         currentItem = 0
//     }
//     showPerson()
// })
// prevBtn.addEventListener("click",()=>{
//     currentItem--
//     if(currentItem < 0 ){
//         currentItem = reviews.length - 1
//     }
//     showPerson()
// })