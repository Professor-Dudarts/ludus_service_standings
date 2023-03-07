import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<div style="color: green"> MONEY!!! </div>';
  }
  getGui(parametro:string): string {
    var texto = parametro;
    return '<div style="color: green">'+
              '<input type="button" onClick="alertaGui()" value="click here"/>'+
            '</div>'+
            '<script>'+
              'function alertaGui()'+
              '{ alert("'+texto+'");}'+
            '</script>';
  }
  getThayla(){
    return {nome:"Thayla"}
  }
}
