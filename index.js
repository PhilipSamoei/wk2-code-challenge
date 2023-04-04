
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

      