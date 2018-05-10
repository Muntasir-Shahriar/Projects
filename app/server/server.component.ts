import{ Component } from '@angular/core';

@Component({
    selector: 'ap-server',
    templateUrl: './server.component.html',
    styles:[`
       .online{
           color: white;
       }
    `]
})
export class ServerComponent{
    name: string = 'Mutasir';
    id: number = 1204072;
    constructor() {
        this.name = Math.random() > 0.5 ? 'Muntasir' : 'Shahriar'; 
    }
    getserverStatus() {
        return this.name;
    }
    getColor() {
        return this.name == 'Muntasir' ? 'red' : 'green';
    }

}