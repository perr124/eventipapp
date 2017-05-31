import { FavDetail } from "../models/favdetail";
import {Injectable} from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { AuthService } from "../services/auth";

@Injectable()
export class FavService {
    private detail: FavDetail[] = [];

    constructor(private http: Http, private authServ: AuthService) {} 


    storeFav(token: string) {
            const userId = this.authServ.getActiveUser().uid;
            return this.http.put('https://eventip-b868b.firebaseio.com/atlanta/0/favorites/0/' + userId + '.json?auth='+token, this.detail)
            .map((response: Response) => response.json())
        }


    addFavTo(detail: FavDetail) {
        this.detail.push(detail);
        console.log(this.detail);
        if (this.detail.length > 0){
            this.authServ.getActiveUser().getToken()
          .then(
            (token: string) => {
              this.storeFav(token).subscribe(
                () => console.log('saved'),
                error => {
                    
                }
              )
            }
          );
        }
    }


    isFav(detail1: FavDetail) {
        return this.detail.find((detailChk: FavDetail) => {
            return detailChk.address == detail1.address;
        })
    }


    removeFav(detail1: FavDetail) {
        const position = this.detail.findIndex((detailChk: FavDetail) => {
            return detailChk.address == detail1.address;
        });
        this.detail.splice(position, 1)
        console.log(this.detail)

        if (this.detail.length > 0){
            this.authServ.getActiveUser().getToken()
          .then(
            (token: string) => {
              const userId = this.authServ.getActiveUser().uid;
            return this.http.put('https://eventip-b868b.firebaseio.com/atlanta/0/favorites/0/' + userId + '.json?auth='+token, this.detail)
            .map((response: Response) => response.json()).subscribe(
                () => console.log('saved'),
                error => {
                }
              )
            }
          );
        }
        // this.setFav();
    }


    setFav() {
        if (this.detail.length < 1){
            this.authServ.getActiveUser().getToken()
          .then(
            (token: string) => {
              this.fetchFav(token).subscribe(
                (list: FavDetail[]) => {
                  if(list) {
                    this.detail = list;
                    // console.log('from set0' + list)
                  } else {
                    this.detail = []
                    // console.log('from set0' + list)
                  }
                },
                error => {
                    
                }
              )
            }
          );
        }
    }


    getFav() {
        if (this.detail.length > 0){
            console.log('more')
        }
        return this.detail.slice();
    }

    
    fetchFav(token: string) {
        const userId = this.authServ.getActiveUser().uid;
        return this.http.get('https://eventip-b868b.firebaseio.com/atlanta/0/favorites/0/' + userId + '.json?auth='+token, this.detail)
        .map((response: Response) => {
            return response.json();
        })
        .do((detail) => {
            this.detail = detail
            console.log(this.detail)
        });
    }

    
}