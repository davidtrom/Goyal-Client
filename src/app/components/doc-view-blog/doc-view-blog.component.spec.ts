import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocViewBlogComponent } from './doc-view-blog.component';

describe('DocViewBlogComponent', () => {
  let component: DocViewBlogComponent;
  let fixture: ComponentFixture<DocViewBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocViewBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocViewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
