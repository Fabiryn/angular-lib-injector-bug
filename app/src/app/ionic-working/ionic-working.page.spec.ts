import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {IonicWorkingPage} from './ionic-working.page';

describe('IonicWorkingPage', () => {
    let component: IonicWorkingPage;
    let fixture: ComponentFixture<IonicWorkingPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonicWorkingPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(IonicWorkingPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
