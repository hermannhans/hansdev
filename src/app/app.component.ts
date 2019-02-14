import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hansDev app';
const person = { name: 'Matheus', age: 26 }

const {name, age} = person

console.log(name)
console.log(age)

}
