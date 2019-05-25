import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons/faSignOutAlt';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    faSignOut = faSignOutAlt;

    constructor(public authService: AuthService) {
    }

    ngOnInit() {
    }

    onSignOut() {
        if (confirm('Are you sure you want to Logout ?') === true) {
            this.authService.signOut();
        }
    }

}
