import {Component, OnInit} from '@angular/core';
import {AngularService} from 'herbert';

@Component({
    selector: 'app-angular',
    templateUrl: './angular.page.html',
    styleUrls: ['./angular.page.scss'],
})
export class AngularPage implements OnInit {

    constructor(private readonly angularService: AngularService) {
    }

    ngOnInit() {
    }

}
