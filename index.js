
    const form = document.getElementById('form')

    form.addEventListener('submit',function(e){
        e.preventDefault();

        const prePayload = new FormData(form);
        const payload = new URLSearchParams(prePayload);
        
        console.log([...payload]);

        fetch('http://localhost:3000/characters',{
            method:"POST",
            body:payload,
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err =>console.log(err));
    })


    const count = 0;
      const button = document.getElementById("myButton");
       const countDisplay = document.getElementById("count");
      button.addEventListener("click", function() {
         count++;
         countDisplay.innerHTML = count;
      });

      











const data = " http://localhost:3000/characters";
//Fetch Character Names
function fetchCharacterNames () {
    return fetch(data)
    .then(response => response.json())
}
// function renderCharacterNames(character) {
//     const characterBar = document.getElementById("character-bar");
//     const span = document.createElement("span");
//     span.innerHTML = character.name;
//     characterBar.appendChild(span);
//     span.dataset.id = character.id;
//     span.addEventListener("click", onSpanCharacterClick);
// };
// fetchCharacterNames().then(characters => {
//     characters.forEach(character => {
//         renderCharacterNames(character);
//     })
// })
// //Fetching character details
// function fetchCharacterDetails (id) {
//     return fetch(baseUrl + `/${id}`)
//     .then(response => response.json())
// }
// function onSpanCharacterClick (event) {
//     fetchCharacterDetails(event.target.dataset.id)
//     .then(renderCharacterDetails);
// }
// function renderCharacterDetails(character) {
//     const characterInfo = document.getElementById("detailed-info");
//     const charName = document.getElementById("name");
//     charName.innerText = character.name
//     const charImg = document.getElementById("image");
//     charImg.src = character.image
//     const charVotes = document.getElementById("vote-count");
//     charVotes.innerText = character.votes
// }
// //Form Submission and Updating Votes
// document.getElementById("votes-form").addEventListener("submit", (event) => {
//     event.preventDefault();
//     const votesForm = event.target;
//     const votes = document.getElementById("vote-count")
//     votes.innerText = parseInt(votesForm.votes.value) + parseInt(votes.innerText);
//     votesForm.reset();
// })
// //Reset Button Functionality
// document.getElementById("reset-btn").addEventListener("click", () => {
//     document.getElementById("vote-count").innerText = 0;
// })
// document.addEventListener("DOMContentLoaded", function () {
//     fetchCharacterNames();
//     fetchCharacterDetails();
// })
// const div = document.getElementById("animalInformation");
// let url = "http://localhost:3000/characters"  //this is the API which is hosted inside localhost dbjson
// // this function fetches data from server
// function getAllAnimals() {
//  fetch(url)   //API that is hosted within the localhost dbjson
//     .then((res) => res.json()) //the response brings a promise then converted in json format
//     .then((data) => {
//       //we are looping through the array data of each Animal
//       data.forEach((character) => {
//         let span = document.createElement("span");
//         span.textContent = character.name;
//         span.addEventListener("click", (e) => {
//           let name = document.getElementById("name");
//           name.textContent = Animal.name;
//           let img = document.getElementById("image");
//           img.src = Animal.image;
//           let voteCounts = document.getElementById("countvote");
//           voteCounts.textContent = Animal.votes;
//         });
//         div.appendChild(span);
//       });
//     });
// }
// getAllAnimals();


//     // let form = document.querySelector("form");
// let form = document.querySelector("form")
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // counts votes and returns when clicked
//   let countVote = document.getElementById("vote").value;
//   console.log(countVote);
//   let totalVotes = document.getElementById("countvote");
//   // add votes to the previous votes on each Animal
//   let total = parseInt(totalVotes.innerHTML) + parseInt(countVote);
//   totalVotes.innerHTML = total;
//   form.reset();
// });