import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TodoDetailsPage } from './todo-details.page';
describe('TodoDetailsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoDetailsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(TodoDetailsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=todo-details.page.spec.js.map