import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title "default-index-019"`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("default-index-019");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector(".content span")?.textContent
    ).toContain("default-index-019 app is running!");
  });
});









// import { TestBed } from "@angular/core/testing";
// import { AppComponent } from "./app.component";

// describe("AppComponent", () => {
//   beforeEach(() => TestBed.configureTestingModule({
//     declarations: [AppComponent]
//   }));

//   it("should create the app", () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title "default-index-019"`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual("default-index-019");
//   });

//   it("should render title", () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(
//       compiled.querySelector(".content span")?.textContent
//     ).toContain("default-index-019 app is running!");
//   });
// });