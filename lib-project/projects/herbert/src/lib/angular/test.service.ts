import {Injectable} from '@angular/core';

// ionic-native serive equivalent (without providedIn)
@Injectable()
export class TestService {

  constructor() {
  }

  public test(): void {
    console.log('test');
  }
}
