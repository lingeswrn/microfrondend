import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microapp1';
  count = 0;

  call() {
    this.count = this.count + 1;
    const micro2 = document.querySelector('micro-app-2');
    if (micro2 != null) {
      micro2['message'] = this.count;
    }else{
      console.log("Not found!")
    }
  }
}
