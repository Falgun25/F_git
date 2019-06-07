
let totalcol=1
let totalraw=1
let n =1

function coladd() {
    // let tColum =document.createElement('td')
    // let element=document.createElement('input')
    //
    // element.setAttribute('type','text')
    // element.setAttribute("name", "Test Name");

    n++;
    let button1=document.createElement('input')
    let button2=document.createElement('input')
    let th1=document.createElement('th')
    let trr1 = document.getElementById('trr1')

    th1.setAttribute('id','th'+n)
    button1.setAttribute('type','button')
    button1.setAttribute('value','COL')
    button2.setAttribute('type','button')
    button2.setAttribute('value','COLdel')
    button2.setAttribute('id',n+'')

    button2.onclick =function(){

        delcol(this.id)
    }

    trr1.appendChild(th1)
    //tr1.appendChild(th1)
    th1.appendChild(button1)
    th1.appendChild(button2)
    let i=1
    while(true) {
        let tColum =document.createElement('td')
        let element=document.createElement('input')
        // let button1=document.createElement('input')
        // let button2=document.createElement('input')
        // let trr1 = document.getElementById('trr1')

        let tr1=document.createElement('tr')


        element.setAttribute('type','text')
        element.setAttribute("name", "Test Name");
        element.setAttribute("id", "id"+i+(totalcol+1));
        tColum.setAttribute("id", "idc"+i+(totalcol+1));

        let traw = document.getElementById('tr'+i)
        if(traw == null)
            break;
        //trr1.appendChild(th1)

        //th1.appendChild(button1)
        //th1.appendChild(button2)
        traw.appendChild(tColum)
        tColum.appendChild(element)
        i++

    }
console.log(i)
totalcol++
//totalraw=i
    console.log('inside addcol traw'+ totalraw +'tcom'+totalcol)
}

function rawadd() {
   // let m=totalraw

    let traw = document.createElement('tr')
    let tColum1 =document.createElement('td')
    let button1=document.createElement('input')
    let button2=document.createElement('input')
    let ta1= document.getElementById('ttb1')
    //let traw1= document.getElementById('tr'+totalraw)
    traw.setAttribute('id','tr'+(totalraw+1))
    button1.setAttribute('type','button')
    button1.setAttribute('value','raw')

    button2.setAttribute('id','tbr'+(totalraw+1))
    button2.setAttribute('type','button')
    button2.setAttribute('value','rawdel')

    button1.onclick = function(){
        rawadd()
    }

    button2.onclick=function(){
        delraw(this.parentNode.parentNode.id)

    }

    ta1.appendChild(traw)
    traw.appendChild(tColum1)
    tColum1.appendChild(button1)
    tColum1.appendChild(button2)

    for(let x=0;x<totalcol  ;x++)
    {
        let tColum =document.createElement('td')

        let element=document.createElement('input')
        element.setAttribute('type','text')
        element.setAttribute("name", "Test Name");
        element.setAttribute("id", "id"+(totalraw+1)+(x+1));
        tColum.setAttribute("id", "idc"+(totalraw+1)+(x+1));


        // traw.appendChild(tColum1) //change in branch 2
        // tColum1.appendChild(button)
        traw.appendChild(tColum)
        tColum.appendChild(element)


    }

    totalraw++;
    console.log('inside addraw traw'+ totalraw +'tcom'+totalcol)
}

function disp() {
    let tt1 =document.getElementById('tt1')
    let tbb1 =document.getElementById('tb1')
    let the1 =document.getElementById('thead2')
    tt1.removeChild(tbb1);
    tt1.removeChild(the1)
    let tb1 =document.createElement('tbody')
    let thead1=document.createElement('thead')
    thead1.setAttribute('class','thead-dark')
    thead1.setAttribute('id','thead2')
    tb1.setAttribute('id','tb1')
    tt1.appendChild(thead1)
    tt1.appendChild(tb1)

    for(let a=1;a<(totalraw+1);a++)
    {
        let traw = document.createElement('tr')
        traw.setAttribute('id', 'idd' + a)
        let tb1 = document.getElementById('tb1')
        if(document.getElementById('idd'+a) == null) {

            if(a==1){
                thead1.appendChild(traw)
            }
            else {
                tb1.appendChild(traw)
            }
        }
            for (let b = 1; b < (totalcol + 1); b++) {
                let info
                if (document.getElementById('idd' + a + b) == null) {

                    if(a==1)//Last change
                    {

                        let theadp = document.createElement('th')
                        traw.appendChild(theadp)
                        let p1 = document.createElement('p')
                        p1.setAttribute('id', 'idd' + a + b)
                        theadp.appendChild(p1)
                         info = document.getElementById('id' + a + b).value
                    }
                    else {
                        let tcolp = document.createElement('td')
                        traw.appendChild(tcolp)
                        let p1 = document.createElement('p')
                        p1.setAttribute('id', 'idd' + a + b)
                        tcolp.appendChild(p1)
                         info = document.getElementById('id' + a + b).value
                    }
                    if(info) {
                        document.getElementById('idd' + a + b).innerHTML = info
                    }
                    else
                    {
                        document.getElementById('tb1').style.display ="none";
                       alert('fill all filds')
                    }
                }

            }
        //}
    }

}

function  delraw(id) {

    let tb1=document.getElementById('ttb1')
    let trd =document.getElementById(id)

    tb1.removeChild(trd)

    totalraw--;

      
}

function delcol(id) {
    let m=1
    let trr1=document.getElementById('trr1')
    let th =document.getElementById('th'+id)
    trr1.removeChild(th)

    for(let y=1;y<(totalraw+1);y++){
        let tr = document.getElementById('tr'+m)
       let tcd = document.getElementById('idc'+m+id)
        tr.removeChild(tcd)
        m++;
    }

    totalcol--;

}
