import { TestBed, async } from '@angular/core/testing';
import { DeletedComponent} from './deleted.component'

describe('DeletedComponent', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        DeletedComponent
      ],
    });
  });

  it('should create the app',() => {
    let fixture = TestBed.createComponent(DeletedComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});