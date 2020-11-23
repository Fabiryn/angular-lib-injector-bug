import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {AngularWorkingPage} from './angular-working.page';

describe('AngularWorkingPage', () => {
    let component: AngularWorkingPage;
    let fixture: ComponentFixture<AngularWorkingPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AngularWorkingPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(AngularWorkingPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
