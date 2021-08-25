import publish from "./publish";

function samplePPK(){
    var rabbitPop=20;
    var wolfPop=100;
    var rabbitsIncreasing = true;
    setInterval(function(){
        if(rabbitsIncreasing){
            rabbitPop+=2;
            wolfPop--;
            if(rabbitPop==100){
                rabbitsIncreasing=false;
            }
        }else{
            rabbitPop-=2;
            wolfPop++;
            if(rabbitPop==20){
                rabbitsIncreasing=true;
            }
        }
        var json = {
            "rabbitPop": rabbitPop,
            "wolfPop": wolfPop,
        }
        publish(JSON.stringify(json));
    }, 5000);
}

export default samplePPK;