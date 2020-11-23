import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvidedInRootTestService {

  constructor() {
  }

  public test(): void {
    console.log('test');
  }
}
