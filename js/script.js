var div = document.createElement('div');
div.style.textAlign='center';

var input = document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','country');

var button = document.createElement('ele');

button.innerHTML=`<button type="button" class="btn btn-primary">Search</button>`
button.style.marginLeft='10px';
button.addEventListener('click',foo);

let active = document.createElement('div');
active.setAttribute('id','active');
active.style.margin='10px';
active.style.color='white';

let death = document.createElement('div');
death.setAttribute('id','death');
death.style.margin='10px';
death.style.color='white';


let recovered = document.createElement('div');
recovered.setAttribute('id','recovered');
recovered.style.margin='10px';
recovered.style.color='white';


div.append(input,button,active,death,recovered);
document.body.append(div);

async function foo(){
    let res = document.getElementById('country').value;

    let url = `https://api.covid19api.com/total/dayone/country/${res}`

    let res1 = await fetch(url);
    let res2= await res1.json();
    console.log(res2)
    let index = res2.length-1;
    console.log(res2[index].Deaths)
    active.innerHTML=`Total Active Cases : ${res2[index].Active}`;
    death.innerHTML=`Total Active Cases : ${res2[index].Deaths}`;
    recovered.innerHTML=`Total Recovered Cases : ${res2[index].Recovered}`;

    

}