function lockerRun(lockers){  
	    
    //creamos un array con el numero pasado
        //let arr=[lockers];
            //rellenamos el array a cero
     let arr = Array.from({ length:lockers }, () => 1)
     let result=[];
    let salto=1;
    let x=0;
      //calculamos los saltos/vueltas que da el programa
      do{
        
        for (let x=0;x<arr.length;x++)
            {
            //calculamos que posiciones son afectadas
                x=x+salto;
                
                if (x<arr.length)
                    {
                      if(arr[x]==0)
                      {
                        arr[x]=1;
                      }else
                      {
                      arr[x]=0;
                      }
                    }
            
            }
        salto++;
      }while(salto<lockers);        
           
            for (let i=0;i<arr.length;i++){
              if(arr[i]==1){
                result.push(i+1);
              }    
            } 
            
            return result;
      }


function medir_tiempo(numero){
    const start = new Date();
    lockerRun(numero);
    const end = new Date();
    return end.getTime()-start.getTime();
}
      
 console.log(medir_tiempo(8));
 console.log(medir_tiempo(256));
 console.log(medir_tiempo(52405));
 console.log(medir_tiempo(810239));
 console.log(medir_tiempo(33732809));
