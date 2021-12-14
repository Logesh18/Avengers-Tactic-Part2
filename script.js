const body = document.querySelector('#body');
const parent = document.querySelector('#Parent');
const dustin = document.querySelector('#Dustin');
const lucus = document.querySelector('#Lucus');
function totalStrength(data){
    let s1=0,s2=0;
    for(let i=0;i<data.length;i++)
    {
        if(data[i]["type"]==="hero"){
           s1+=data[i]["strength"];
        }
        else{
           s2+=data[i]["strength"];
        }
    }
    return [s1,s2];
}
function buildPlayers(players){
    var str='';
    for(let i=0;i<players.length;i++){
        let div = document.createElement('div');
        div.id = 'wrapper';
        str='<div class="player"><center><img class="player-image" src="'+players[i].image+'"><div class="name">'+players[i].name+'</div><div class="strength">'+players[i].strength+'</div></center></div>';
        if(i<players.length/2){
            div.innerHTML=str;
            dustin.appendChild(div);
            parent.appendChild(dustin);
        }
        else{
            div.innerHTML=str;
            lucus.appendChild(div);
            parent.appendChild(lucus);
        }
        body.appendChild(parent);
    }
    
}
function getRandomStrength(){
    return Math.floor((Math.random() * 100) + 1);
}
function initPlayers(character){
    let json={};
    let type=["hero","villain"]
    json['name']=character;
    json['strength']=getRandomStrength();
    json['image']="images/super-"+(i+1)+".png"
    json['type']=type[Math.floor(Math.random()*type.length)];
    return json;
}
function avengers(){

    let characters=['Spiderman','Superman','Captain America','Thor','Antwoman','Catwoman','Volverine','Black Widow','Hulk','Iron Man',
                'Ultron','Loki','Thanos','Korvac','Scarlet Witch', 'Norman Osborn','Skrulls','Baron Zemo','Kang','Taskmaster']
    let data=[]
    let c1=0,c2=0;
    for(let j=0;j<5;j++){
        for(i=0;i<characters.length;i++){
            data[i]=initPlayers(characters[i]);
            console.log(data[i]['name']);
        }
        r=totalStrength(data);
        if(r[0]>r[1]){
            c1++;
        }
        else{
            c2++;
        }
    }
    buildPlayers(data);
    document.getElementById("result").innerHTML=c1+"-"+c2;
}

