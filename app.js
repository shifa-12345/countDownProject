const endDate="1 August 2023 12:00 AM"

document.getElementById("end-date").innerHTML=endDate;
const inputs=document.querySelectorAll("input")
const clock=()=>{
    const end=new Date(endDate)
    const now=new Date()
    const diff=(end-now)/1000;

    if (diff < 0) return;//after completing it will stop at 0, - m nhui jayenga...

    inputs[0].value=Math.floor(diff/3600/24);//days
    inputs[1].value=Math.floor((diff/3600)%24);//hrs
    inputs[2].value=Math.floor((diff/60)%60);//minutes
    inputs[3].value=Math.floor(diff)%60;//sec
}
clock();
/**
 * 1 day=24hrs
 * 1 hr=60 min
 * 60 min=3600 sec
 */
setInterval(
()=>{
    clock()
},1000

)