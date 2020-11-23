import {Injectable} from '@angular/core';
import {AppTestNoProvidedInService} from './app-test-no-provided-in.service'

@Injectable({
    providedIn: 'root'
})
export class AppTestService {

    constructor(private readonly appTestNoProvidedInService: AppTestNoProvidedInService) {
        appTestNoProvidedInService.test();
    }
}
