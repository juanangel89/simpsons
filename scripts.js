// fetch('https://thesimpsonsquoteapi.glitch.me/quotes', options)
//   .then(response => response.json())//formatear para leer
//   .then(response => console.log(response))//mostrar
//   .catch(err => console.error(err))//mensaje si sale error

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes'
const containerCards = document.querySelector('.cards-container')
const btnGenerateCard = document.querySelector('#generate-card')
const btnGenerateMultiple = document.querySelector('#generate-multiple')


const generateCards = () => {
    let count = parseInt(prompt('¿cuantas card deseas crear?'))
    for (let index = 1; index <= count; index++) {
        getCharacter()
    }
}

const getCharacter = async () => {
    const response = await fetch(url)
    const data = await response.json()
    makeCharacter(data[0])
    
}

const makeCharacter = (myCharacter) => {
    const card = document.createElement('div')
    card.classList.add('card')
    
    const imgCard = document.createElement('img')
    imgCard.src=myCharacter.image
    imgCard.alt=myCharacter.character
    
    const cardContent = document.createElement('div')
    cardContent.classList.add('card-content')
    
    const nameCard = document.createElement('h3')
    nameCard.textContent = myCharacter.character
    
    const quoteCard = document.createElement('p')
    quoteCard.textContent = myCharacter.quote

    card.appendChild(imgCard)
    card.appendChild(cardContent)

    cardContent.appendChild(nameCard)
    cardContent.appendChild(quoteCard)
    
    containerCards.appendChild(card)
}


btnGenerateCard.addEventListener('click',getCharacter)
btnGenerateMultiple.addEventListener('click',generateCards)
