console.log("kiran");
function romanToNumber(str){
    var sum=0
    for(var i=0;i<str.length;i++){
        if(str[i]=='I'){
            if(str[i+1]=='V'){
                sum+=4
                i++
            }
            else if(str[i+1]=='X'){
                sum+=9
                i++
            }
            else{
                sum+=1
            }
        }
        else if(str[i]=='V'){
            sum+=5
        }
        else if(str[i]=='X'){
            if(str[i+1]=='L'){
                sum+=40
                i++
            }
            else if(str[i+1]=='C'){
                sum+=90
                i++
            }
            else{
                sum+=10
            }
        }
        else if(str[i]=='L'){
            sum+=50
        }
        else if(str[i]=='C'){
            if(str[i+1]=='D'){
                sum+=400
                i++
            }
            else if(str[i+1]=='M'){
                sum+=900
                i++
            }
            else{
                sum+=100
            }
        }
        else if(str[i]=='D'){
            sum+=500
        }
        else if(str[i]=='M'){
            sum+=1000
        }
    }
    return sum
}

console.log(romanToNumber("CDXXIX")) 
