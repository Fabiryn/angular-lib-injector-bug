import {Component, OnInit} from '@angular/core';
import {ProvidedInRootService} from 'herbert';

@Component({
    selector: 'app-provided-in-root',
    templateUrl: './provided-in-root.page.html',
    styleUrls: ['./provided-in-root.page.scss'],
})
export class ProvidedInRootPage implements OnInit {

    constructor(private readonly providedInRootService: ProvidedInRootService) {
    }

    ngOnInit() {
    }

}
