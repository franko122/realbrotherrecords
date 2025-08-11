function newStart( ) {
     let one = document.getElementById("one");
    let two = document.getElementById('two');
    let toper = document.getElementById('toper')

    one.addEventListener("click",()=>{
     toper.style.width="100%"
    })

     two.addEventListener("click",()=>{
     toper.style.width="0%";
     toper.style.overflow="hidden"
    })
}
newStart( );