import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {AppServicePage} from './app-service.page';

describe('AppServicePage', () => {
    let component: AppServicePage;
    let fixture: ComponentFixture<AppServicePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppServicePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(AppServicePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
