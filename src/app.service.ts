import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async order(arr: Array<string>): Promise<void> {
    for (let j = 0; j < arr.length - 1; j++) {
      let aux = '';
      for (let i = j + 1; i < arr.length; i++) {
        if (arr[j] > arr[i]) {
          aux = arr[j];
          arr[j] = arr[i];
          arr[i] = aux;
        }
      }
    }
  }

  async normalized(list: Array<string>): Promise<Array<string>> {
    console.log('Iniciando a ordenação: ', list);
    await this.order(list);
    console.log('Finalizando ordenação.', list);
    return list;
  }
}
