
    const form = document.getElementById('form')

    form.addEventListener('submit',function(e){
        e.preventDefault();

        const myInit = {
            method:"POST",
            

        }
        let myRequest = new Request ("./db.json")

        fetch(myRequest )
        .then(res => res.json())
        .then(charactersData => console.log(charactersData))
        .catch(err =>console.log(err));
    })


    var clicks = 0;

    document.getElementById("clicks").innerHTML = clicks;
    
    $('.like-counter').click(function() {
      clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
      $('.like-counter').addClass("liked");
    });
      