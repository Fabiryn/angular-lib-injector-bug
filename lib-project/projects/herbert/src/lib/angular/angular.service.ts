import {Injectable} from '@angular/core';
import {TestService} from './test.service';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  constructor(private readonly testService: TestService) {
    testService.test();
  }
}
