const A_Voice = "./assets/Pvoice.mp3";
const S_Voice = "./assets/RVoice.mp3";
const D_Voice = "./assets/EVoice.mp3";
const F_Voice = "./assets/IVoice.mp3";
const G_Voice = "./assets/TVoice.mp3";

//Voices on keypress

const array= [
    {
        keycode : 'A',
        className : ".button_A",
        audioPath: A_Voice
    },
    {
        keycode : 'S',
        className : ".button_S",
        audioPath: S_Voice
    },
    {
        keycode : 'D',
        className : ".button_D",
        audioPath: D_Voice
    },
    {
        keycode : 'F',
        className : ".button_F",
        audioPath: F_Voice
    },
    {
        keycode : 'G',
        className : ".button_G",
        audioPath: G_Voice
    },
]


addEventListener('keydown', (press)=>{

    for(let i=0; i<array.length; i++){
        if(press.key === array[i].keycode || press.key === array[i].keycode.toLowerCase()){
            
            new Audio(array[i].audioPath).play();
            document.querySelector(array[i].className).classList.add("change__bg");
        }
    }
})

//Voices on click

for(let i=0; i<array.length; i++){

    var select = document.querySelector(array[i].className);
    select.addEventListener('click',()=>{
        new Audio(array[i].audioPath).play();
        select.classList.add("change__bg");
    })
}



