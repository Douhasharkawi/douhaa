let trun="x";
let title=document.getElementById('span')
let array=[]



function end(){
    title.innerHTML=`${array[1]} winner`;
    
setInterval(function(){title.innerHTML+='.'},2000 )
setTimeout(function(){location.reload()},6000)

}


function fast(){
for(let i=1;i<10;i++)

    array[i] = document.getElementById('item'+i).innerHTML;


if(array[1]==array[1] && array[3]==array[2] && array[1]!='')
        
    { console.log('done')
       

      end()
    }
    else if(array[6]==array[4] && array[4] == array[5] && array[5]!=" ")
    { 
        end();
    
    }
    
    
    else if(array[7]==array[8] && array[7]==array[9]&&array[8]!="")
        
    {
        end()
        console.log('done')
         
    }
    else if(array[1] ==array[4]&& array[7]==array[1] && array [1]!=""){
         end ()
          console.log('done')
    }
    else if(array[2] ==array[5] && array[8]==array[2] && array[2]!=""){
            end ()
            console.log('done')
    }
    else if(array[3] ==array[6]&& array[9]==array[3] && array [6]!=""){
              end()
               console.log('done')
    }
    else if(array[1] ==array[5] && array[9]==array[5] && array [9]!=""){ 
    
        console.log('done')
        end()
    }
else if(array[3] == array[5] && array[7]==array[3] && array[3]!=""){ 

      end()
    console.log('done')}}



function gamedata(id){
    let element=document.getElementById(id)
    
 if(trun==="x"&&element.innerHTML==="" )
    { 
       element.innerHTML="x";
         trun="o";
         title.innerHTML="o";
       
         

    }
    else if(trun==="o"&&element.innerHTML==='' ){
       
         element.innerHTML="o";
          trun="x";
        title.innerHTML="x";
  
        
    }   fast()  }
  
