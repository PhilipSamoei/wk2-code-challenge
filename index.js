
    const form = document.getElementById('form')

    form.addEventListener('submit',function(e){
        e.preventDefault();

        const myInit = {
            method:"POST",
            body:payload,

        }
        let myRequest = new Request ("./db.json")

        fetch(myRequest )
        .then(res => res.json())
        .then(charactersData => console.log(charactersData))
        .catch(err =>console.log(err));
    })


    const count = 0;
      const button = document.getElementById("myButton");
       const countDisplay = document.getElementById("count");
      button.addEventListener("click", function() {
         count++;
         countDisplay.innerHTML = count;
      });

      