import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProvidedInRootPage } from './provided-in-root.page';

describe('ProvidedInRootPage', () => {
  let component: ProvidedInRootPage;
  let fixture: ComponentFixture<ProvidedInRootPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidedInRootPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProvidedInRootPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
