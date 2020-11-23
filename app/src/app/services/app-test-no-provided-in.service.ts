import {Injectable} from '@angular/core';

@Injectable()
export class AppTestNoProvidedInService {

    constructor() {
    }

    public test() {
        console.log('test');
    }
}
