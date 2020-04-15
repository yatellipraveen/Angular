import { TestBed, async } from '@angular/core/testing';
import { ManageComponent} from './manage.component'

describe('ManageComponent', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        ManageComponent      ],
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(ManageComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});