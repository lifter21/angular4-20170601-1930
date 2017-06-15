import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user-service/user.service';
import { Observable } from 'rxjs/Observable';

import { User } from 'app/models/user';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    providers: [ UserService ]
})
export class UserListComponent implements OnInit {
    users: Observable<User[]>;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.users = this.userService.getUserList();
    }
}
