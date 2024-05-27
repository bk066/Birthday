let highest = 1 ; 

class paper{ 

    holdingPaper =false;

    prevMouseX = 0;
    prevMouseY = 0;
    
    mouseX = 0;
    mouseY = 0;

    velocityX = 0;
    velocityY = 0;

    currentPaperX = 0;
    currentPaperY = 0;

    init() {
        
        paper.addEvntListener("mousedown", (e)=> {
           
        this.holdingPaper = true ; 


        paper.style.zIndex = highestZ;
        highestZ+= 1:

        if (e.button === 0) {
            this.prevMouseX = this.mouseX;
            this.prevMouseY = this.mouseY;

            console.log (this.prevMouseX);
            console.log (this.prevMouseY);

        }
        
    })

        document.addEvntListener("mousemove" , (e) => {

            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.velocityX = this.mouseX - this.currentPaperX ;
            this.velocityY = this.mouseY - this.currentPaperY ; 

            if (this.holdingPaper) {

                this.currentPaperX += this.velocityX;
                this.currentPaperY += this.velocityY; 

                this.prevMouseX = this.mouseX ;
                this.prevMouseY = this.mouseY ;

                paper.style.transform = 'translateX(${this.currentPaperX})px translateY(${this.currentPaperY})px'

            }

                })

        window.addEvntListener('mouseup' , (e) => {
            console.log('mouse button is released'); 
            this.holdingPaper = false;
            
        })

    }
}
const paper=Array.from(document.forms(querySelectorAll('.paper')));

paper.forEach(paper =>{
    const p = new Paper();
    p.init(paper);

})