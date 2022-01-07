let sisend = prompt("Sisesta temperatuur")
function checkTemp(a) {
    if (a<=20) {
    console.log("liiga külm")
    return -1;
    } else if (a>=21 && a<=40) {
    console.log("paras")
    return 0;
    } else {
        console.log("liiga kuum")
        return 1;
    }
}
     
checkTemp(sisend)
