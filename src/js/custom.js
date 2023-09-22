let parentChild = document.querySelector('.animation');
let blog = 500;

let screenWidth = screen.width;
let screenHeight = screen.height-150;
function count(e){
    for(let i = 0; i < e ; i++ ){
        let child = document.createElement('span');
        parentChild.appendChild(child);
        child.style.top = Math.random()*screenHeight+'px';
        child.style.right = Math.random()*screenWidth+'px';
        child.style.animationDelay= Math.random()*2+'s';
    }   

}
count(blog);
console.log(screenHeight);