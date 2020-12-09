import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUserEntity, UsersService} from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: IUserEntity; // zde je saved právě editovaný uživatel
  username = '';


  constructor(
    private readonly  activatedRoute: ActivatedRoute,
    private readonly  usersService: UsersService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(p => {
      const id: string = p.get('id'); // '1'
      const idNum = parseInt(id, 10);
      this.usersService.getUserById(idNum)
        .subscribe(
          (u: IUserEntity) => {
            if (u) {
              this.user = u;
              this.username = u.username;
            } else {
              this.router.navigateByUrl('/users');
            }
          },
          e => {
            console.error(e);
          }
        );
    });
  }

  edit() {
    this.usersService.edit(this.user.id, this.username)
      .subscribe((u: IUserEntity)=>{
        this.user = u;
        this.username = u.username;
      })


  }

}
