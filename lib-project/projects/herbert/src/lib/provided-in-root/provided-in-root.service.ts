import {Injectable} from '@angular/core';
import {ProvidedInRootTestService} from './provided-in-root-test.service';

@Injectable({
  providedIn: 'root'
})
export class ProvidedInRootService {

  constructor(private readonly providedInRootTestService: ProvidedInRootTestService) {
    providedInRootTestService.test();
  }
}
