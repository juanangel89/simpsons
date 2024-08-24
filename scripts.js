// fetch('https://thesimpsonsquoteapi.glitch.me/quotes', options)
//   .then(response => response.json())//formatear para leer
//   .then(response => console.log(response))//mostrar
//   .catch(err => console.error(err))//mensaje si sale error

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes'
const containerCards = document.querySelector('.cards-container')

const getCharater = async () => {
    const response = await fetch(url)
    const data = response.json()
    console.log(data)
}

const makeCharacter = (myCharacter) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const imgCard = document.createElement('img')
    imgCard.scr=myCharacter.image
    imgCard.alt=myCharacter.Character

    const cardContent = document.createElement('div')
    cardContent.classList('card-content')

    const nameCard = document.createElement('h3')
    nameCard.alt=myCharacter.Character

    const quoteCard = document.createElement('p')
    quoteCard.textContent = myCharacter.quote

    card.appendChild(imgCard)
    card.appendChild(cardContent)

    cardContent.appendChild(nameCard)
    cardContent.appendChild(quoteCard)

    containerCards.appendChild(card)

}

