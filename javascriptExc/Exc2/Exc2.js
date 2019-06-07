let i=0
let break1
let m=0
let arr=[]
let n=0;
// let del= false
// window.onload =function () {
//
//
//     if (localStorage.div) {
//
//         document.getElementById('lcs').innerHTML = localStorage.getItem('div')
//         i = localStorage.getItem('i')
//         m = localStorage.getItem('m')
//         n = localStorage.getItem('n')
//         //arr=localStorage.getItem('arr')
//         //break1=localStorage.getItem('break1')
//         console.log(i)
//     }
//
// }

function display() {

    let div = document.getElementById('disp')
    let p = document.createElement('p')
    p.setAttribute('id', 'fnd')
    div.appendChild(p)
    let info = document.getElementById('rfn').value;

    document.getElementById('fnd').innerHTML = info;

    for (let x = 1; x <= i; x++) {
        let p = document.createElement('p')
        p.setAttribute('id', 'fnd' + x)
        div.appendChild(p)
        let info = document.getElementById('rfn' + x).value;

        document.getElementById('fnd' + x).innerHTML = info;

    }


}




    function add() {

        let element = document.createElement('input')
        let button = document.createElement("input")
        let button1 = document.createElement("input")
        let form = document.getElementById('form1')
        break1 = document.createElement('br')


        i++;
        element.setAttribute("type", "text");

        element.setAttribute("name", "Test Name");


       button.setAttribute('type', 'button')
        button.setAttribute("value", "delete");
        button.setAttribute('name', 'delete');
        button.setAttribute('onclick','rev(this.id)')

        button1.setAttribute('type', 'button')
        button1.setAttribute("value", "add");
        button1.setAttribute('name', 'add')
        button1.setAttribute('onclick','add()')


        if (m) {

            m--

            element.setAttribute("value", arr[m] + '');
            element.setAttribute("id", 'rfn' + arr[m]);
            button.setAttribute('id', arr[m] + '');
            button1.setAttribute('id', 'bnn' + arr[m]);

            // n++;
            // if (m == 0) {
            //     n = 0
            // }

        } else {
            element.setAttribute("value", i + '');
            element.setAttribute("id", 'rfn' + i);
            button.setAttribute('id', i + '');
            button1.setAttribute('id', 'bnn' + i)
        }

        // button1.setAttribute('onclick','add()')



        form.appendChild(element)
        form.appendChild(button1)
        form.appendChild(button)
        form.appendChild(break1)

        button1.onclick=function(){
            add()
        }

        button.onclick = function () {
            rev(this.id)
        }

        let fm = document.getElementById('lcs').innerHTML

        localStorage.setItem('div', fm + '')


        localStorage.setItem('i', i + '')
        localStorage.setItem('m', m + '')
        localStorage.setItem('n', n + '')
        //  localStorage.setItem('break1', break1 + '')
        console.log(i)
        // localStorage.setItem('arr', arr + '')
        console.log(n)
        console.log(m)

    }

    function rev(id) {
        let form1 = document.getElementById('form1')

        let ele2 = document.getElementById('rfn' + id)
        let btn = document.getElementById(id + '')
        let btn1 = document.getElementById('bnn' + id)
        form1.removeChild(ele2)
        form1.removeChild(btn)
        form1.removeChild(btn1)
        // form1.removeChild(break1)
        arr[m] = id;
        m++;
        i--;

        let fm = document.getElementById('lcs').innerHTML
        localStorage.setItem('div', fm + '')
        localStorage.setItem('i', i + '')
        localStorage.setItem('m', m + '')
        localStorage.setItem('n', n + '')
       // localStorage.setItem('arr', arr + '')
        //localStorage.setItem('break1', break1 + '')
        console.log(i)
        // localStorage.setItem('arr', arr + '')
        console.log(n)
        console.log(m)

        //del=true;
    }



