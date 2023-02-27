import { Component, isDevMode, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-portfolio-app';
  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
      console.log(environment.apiUrl)
    } else {
      console.log('Production!');
      console.log(environment.apiUrl)
    }

    window.addEventListener(
      "scroll",
      () => {

        document.body.style.setProperty(
          "--scroll-per",
          `${(window.scrollY / document.body.offsetHeight) * 120}%`
        );
      },
      false
    );
  }

}
