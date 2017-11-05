import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user: User;
  constructor(private route: ActivatedRoute, private userService: UserService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
     this.userId = params['userId' ];
     this.user = this.userService.findUserByID( this.userId );
    });
  }

}
