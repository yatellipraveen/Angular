import { TestBed, async } from '@angular/core/testing';
import { ActiveComponent} from './active.component'

describe('ActiveComponent', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        ActiveComponent
      ],
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(ActiveComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
