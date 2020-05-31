import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetgamePage } from './setgame.page';

describe('SetgamePage', () => {
  let component: SetgamePage;
  let fixture: ComponentFixture<SetgamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetgamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetgamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
