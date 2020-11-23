import {Component, OnInit} from '@angular/core';
import {AppTestService} from '../services/app-test.service'

@Component({
    selector: 'app-app-service',
    templateUrl: './app-service.page.html',
    styleUrls: ['./app-service.page.scss'],
})
export class AppServicePage implements OnInit {

    constructor(private readonly appTestService: AppTestService) {
    }

    ngOnInit() {
    }

}
