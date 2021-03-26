import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { LatestEpisodeComponent } from './latest-episode.component';

class RouterStub {
  navigate(params) {

  }
}

describe('LatestEpisodeComponent', () => {
  let component: LatestEpisodeComponent;
  let fixture: ComponentFixture<LatestEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestEpisodeComponent],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    let de = fixture.debugElement.query(By.css('.title'));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain('We need');
  });

  it('should apply correct styling to subtitle', () => {
    let de = fixture.debugElement.query(By.css('.subtitle'));
    expect(de.classes['subtitle']).toBeTruthy();
  });

  it('should redirect when the Button is pressed', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');

    component.redirect();

    expect(spy).toHaveBeenCalled();
  });
});
