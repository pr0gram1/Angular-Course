import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';



import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {


    const id= +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(1);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(+params['id']);
        }
      )
  }
  onEdit() {

    //queryparmashangling - string as value - merge, to merge our old query params with any new we might add here, and preserve - overwrite the default behaviour which
    //is to simply drop them and make sure that the old ones are kept
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})

  }


}
