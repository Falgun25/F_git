function  display() {
    let fName = document.getElementById('fn').value;
    let lName = document.getElementById('ln').value;
    let age = document.getElementById('age').value;



    if (!(fName=='' || lName=='' || age=='')) {
        document.getElementById('table').style.display='block'
        document.getElementById('fn1').innerHTML = fName;
        document.getElementById('ln1').innerHTML = lName;
        document.getElementById('age1').innerHTML = age;
    }
    else {

        alert("fill first")
    }
}
