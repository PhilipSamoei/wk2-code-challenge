function displayCharacter (character){
    let nameElement =document.createElement("li")
    nameElement.textContent = character.name
    nameElement.addEventListener("click",()=> {
        fetch(`http://localhost:3000/characters/${character.id`})
        .then(res => res.json())
        .then((character)=> {

            let card =document.createElement("li")
            card.className= "card col-2 p-o m-4"
            card.innerHTML = 
                <img src ="${character.image)" class="card-img-top" alt="${character.name}">
                
        
                document.querySelector(`#item-list`).innerHTML=""
                document.querySelector(`#item-list`).append(card)

                    const voteBtn=card.querySelector("#vote-btn")
                    voteBtn.addEventListener("click", () => {
                       const voteCount = card.querySelector("#vote-count")
                       character.votes++
                       voteCount.textContent =character.votes
                    })
                }


                    const backBtn = card.querySelector("#back-btn")
                    backBtn.addEventListener("click", ()=> {
                        location.reload()
                    })
                })
            })

            document.querySelector("#item-list").append(nameElement)
        }

        function fetchAnimals(){
            fetch("http://localhost:3000/characters")
            .then(res => res.json())
            .then((characters)=> {
                characters.forEach((character)=>{
                    displayCharacter(character)
                })
            })
        }