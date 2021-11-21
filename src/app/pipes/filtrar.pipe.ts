import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any[], param:string,campo:string): any {
    if(!param || param.trim()===''){
      return value;
    }
    if(!value){
      return null;
    }
    param = param.toLowerCase();
    return value.filter(item =>
      item[campo].toLowerCase().includes(param)
    );
  }

}
