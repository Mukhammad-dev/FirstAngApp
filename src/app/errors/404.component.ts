import { Component } from '@angular/core'

@Component({
    template: `
    <h1 class="errorMessage">404 error</h1>
    <h2 style="text-align: center;">You have written fucking wrong page url</h2>
  `,
    styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 170px;
      text-align: center; 
    }`]
})
export class Error404Component {
    constructor() {

    }

}