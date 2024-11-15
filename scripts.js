
    gsap.from("#line h1",{
    y:150,
    stagger:0.2,
    delay:0.5,
    duration:0.6,
})

var h5 = document.querySelector("#line1 h5");

var count = 0;
setInterval(function() {
    if(count<100){
        h5.innerHTML = count++;
    }
    else{
        h5.innerHTML = count;

    }
},35)