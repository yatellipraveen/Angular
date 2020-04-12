import { TestBed, async } from '@angular/core/testing';
import { HomeComponent} from './home.component'

describe('HomeComponent', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});