import { Component, signal, ɵIS_ENABLED_BLOCKING_INITIAL_NAVIGATION } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');

count = 100

inc(){
this.count++;
}

dec(){
this.count--;
}

reset(){
this.count = 0;
}

}


