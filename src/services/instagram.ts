import {Injectable} from "@angular/core";
import { Http, Response, Jsonp } from "@angular/http";
import 'rxjs/add/operator/map';
import { AuthService } from "../services/auth";


@Injectable()
export class InstagramService {
    private instaUrl: string;


    constructor(private http: Http, private authServ: AuthService) {}

    getDetails(){
        this.instaUrl = 'https://api.spotify.com/v1/albums/4NqfJ6S74nJnIz2jUCpveX';
        return this.http.get(this.instaUrl).map(res => res.json());
    }


}