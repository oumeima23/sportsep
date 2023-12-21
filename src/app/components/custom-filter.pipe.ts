import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {
 

  transform(objs:any, x:string){
    if (x === undefined) {
      return (objs); 
    }

   return (objs.filter(
    (obj:any) => { return obj.teamOne.toLowerCase().includes(x.toLowerCase())
    ||obj.teamTwo.toLowerCase().includes(x.toLowerCase())
  }
   )
   ) 
  }
  // transform(ch:string) {
  //   let result:string=""
  //   let v =["a","e","u","i","o","y","A","E","U","I","O","Y"];
  //   for (let i = 0; i < ch.length; i++) {
  //     let x:string = ch[i];
  //     for (let j = 0; j < v.length; j++) {
  //       if (ch[i] == v[j]) {

  //          x="*";
  //       break;

  //       }
        
  //     }
  //     result =result + x ;
      
  //   }
  //   return result
  // }


}
