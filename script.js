const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
const clock = document.querySelector('.clock');

let sec = 0,
    min = 0,
    hr = 0;
let intervalId;

start.addEventListener('click', () => {

    intervalId = setInterval(() => {
        if(sec<59){
            sec++;
        }else if(min>59){
            hr++;
            min = 0;
        }
        else{
            sec = 0;
            min++;
        }

        function timeValue(){
            const seconds = String(sec).padStart(2,'0');
        const minutes = String(min).padStart(2,'0');
        const hours = String(hr).padStart(2,'0');

        clock.innerHTML = `${hours}:${minutes}:${seconds}`;
        }
        timeValue();
        
    }, 1000)

});
pause.addEventListener('click', () => {

    clearInterval(intervalId);

});
reset.addEventListener('click', (timeValue)=>{
    sec = 0;
    min = 0;
    hr = 0;
    clock.innerHTML = "00:00:00";

})