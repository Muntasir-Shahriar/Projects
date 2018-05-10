import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Ser was not Creared!';
  serverName = 'Muntasir';
  serverStatus = false;
  servers = ['Muntasir', 'testServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    
  }

  onServerCreation() {
    this.serverStatus = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Creared! And the name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
