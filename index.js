function thumbs1_gen() {
    // This line below can be changed to define the range for generating randoms
    let temp = Math.floor(Math.random() * 1000) * 24 + Math.floor(Math.random() * 10);
    document.getElementById("thumbs1button").innerHTML= " ❤️(" + temp + ")";
}

function thumbs_onclick() {
    let temp = document.getElementById("thumbs1button").textContent;
    temp = parseInt(temp.slice(4, temp.indexOf(")"))) + 1;
    temp = " ❤️(" + temp + ")"
    document.getElementById("thumbs1button").innerHTML = temp;
}

thumbs1_gen()

function thumbs2_gen() {
    // This line below can be changed to define the range for generating randoms
    let temp = Math.floor(Math.random() * 1000) * 24 + Math.floor(Math.random() * 10);
    document.getElementById("thumbs2button").innerHTML= " ❤️(" + temp + ")";
}

function thumbs2_onclick() {
    let temp = document.getElementById("thumbs2button").textContent;
    temp = parseInt(temp.slice(4, temp.indexOf(")"))) + 1;
    temp = " ❤️(" + temp + ")"
    document.getElementById("thumbs2button").innerHTML = temp;
}

thumbs2_gen()

function thumbs3_gen() {
    // This line below can be changed to define the range for generating randoms
    let temp = Math.floor(Math.random() * 1000) * 24 + Math.floor(Math.random() * 10);
    document.getElementById("thumbs3button").innerHTML= " ❤️(" + temp + ")";
}

function thumbs3_onclick() {
    let temp = document.getElementById("thumbs3button").textContent;
    temp = parseInt(temp.slice(4, temp.indexOf(")"))) + 1;
    temp = " ❤️(" + temp + ")"
    document.getElementById("thumbs3button").innerHTML = temp;
}

thumbs3_gen(0)

function thumbs4_gen() {
    // This line below can be changed to define the range for generating randoms
    let temp = Math.floor(Math.random() * 1000) * 24 + Math.floor(Math.random() * 10);
    document.getElementById("thumbs4button").innerHTML= " ❤️(" + temp + ")";
}

function thumbs4_onclick() {
    let temp = document.getElementById("thumbs4button").textContent;
    temp = parseInt(temp.slice(4, temp.indexOf(")"))) + 1;
    temp = " ❤️(" + temp + ")"
    document.getElementById("thumbs4button").innerHTML = temp;
}

thumbs4_gen(0)

function thumbs5_gen() {
    // This line below can be changed to define the range for generating randoms
    let temp = Math.floor(Math.random() * 1000) * 24 + Math.floor(Math.random() * 10);
    document.getElementById("thumbs5button").innerHTML= " ❤️(" + temp + ")";
}

function thumbs5_onclick() {
    let temp = document.getElementById("thumbs2button").textContent;
    temp = parseInt(temp.slice(4, temp.indexOf(")"))) + 1;
    temp = " ❤️(" + temp + ")"
    document.getElementById("thumbs2button").innerHTML = temp;
}

thumbs5_gen(0)
