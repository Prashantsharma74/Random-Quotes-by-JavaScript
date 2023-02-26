const p = document.querySelector("p")
const button = document.querySelector("button")
const form = document.querySelector("form")
const a = document.querySelector("a")

async function getQuote(e){
    e.preventDefault()

    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    p.innerText=data.content
    a.innerText=data.author
}

form.addEventListener("submit" , getQuote)
