import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {TabMenuModule} from "primeng/tabmenu";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TabMenuModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'clientApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('clientApp');
  });

  it('should contain menu', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p-tabMenu')).toBeTruthy();
  });

  it('should contain all menu items', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app.items.length).toEqual(5);
    expect(app.items[0].label).toEqual('Home');
    expect(app.items[1].label).toEqual('Calendar');
    expect(app.items[2].label).toEqual('Edit');
    expect(app.items[3].label).toEqual('Documentation');
    expect(app.items[4].label).toEqual('Settings');
  });
});
