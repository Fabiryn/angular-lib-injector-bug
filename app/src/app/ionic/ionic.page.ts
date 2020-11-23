import {Component, OnInit} from '@angular/core';
import {IonicService} from 'herbert';

@Component({
    selector: 'app-ionic',
    templateUrl: './ionic.page.html',
    styleUrls: ['./ionic.page.scss'],
})
export class IonicPage implements OnInit {

    constructor(private readonly ionicService: IonicService) {
    }

    ngOnInit() {
    }

}
