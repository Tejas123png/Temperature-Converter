const celciusinput=document.querySelector("#celsius");
const farhenhietinput=document.querySelector("#fahrenheit");
const kelvininput=document.querySelector("#kelvin");
const clearbutton=document.querySelector('button');
function round_num(number){
    return Math.round(number*100)/100;
}
celciusinput.addEventListener('input',()=>{
    let cels=parseFloat(celciusinput.value);
    if (Number.isNaN(cels)) {
        farhenhietinput.value = "";
        kelvininput.value = "";
        return;}
     let fahrenheit=cels*(9/5)+32;
     let kelvin=cels+273.15;
     farhenhietinput.value=round_num(fahrenheit);
    kelvininput.value= round_num(kelvin);
});
farhenhietinput.addEventListener("input",()=>{
        let farh=parseFloat(farhenhietinput.value);
        let celsius=(farh-32)*5/9;
        let  kelvin=celsius+273.15;
        celciusinput.value=round_num(celsius);
        kelvininput.value=round_num(kelvin);
})
kelvininput.addEventListener('input',()=>{
    let kelvin=parseFloat(kelvininput.value);
        let celsius=kelvin-273;
        let  fahrenheit=(celsius*(9/5))+32;
        celciusinput.value=round_num(celsius);
        farhenhietinput.value=round_num(fahrenheit);
})
clearbutton.addEventListener('click',(event)=>{
 event.preventDefault;
        celciusinput.value='';
        farhenhietinput.value = "";
        kelvininput.value = "";
        return;
})


