import {Component, OnInit} from '@angular/core';
import {Friend} from '../../shared/models/friend';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';
import {FriendService} from '../../core/services/friend.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

@Component({
    selector: 'app-friend-list',
    templateUrl: './friend-list.component.html',
    styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

    friends: Friend[];
    faTrash = faTrash;
    faSearch = faSearch;

    constructor(public friendService: FriendService) {
    }

    ngOnInit() {
        this.friendService.getFriends().subscribe(friends => {
            this.friends = friends;
        });
    }

    deleteData(event, friend: Friend) {
        if (confirm('Are you sure you want to delete this friend ?') === true) {
            this.friendService.deleteFriend(friend);
        }
    }

}
