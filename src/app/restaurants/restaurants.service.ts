import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurant } from "./restaurant/restaurant.model"

import { MEAT_API } from '../app.api'
import { ErrorHandler } from '../app.error-handler'

@Injectable()
export class RestaurantsService {

    constructor(private http: Http) { }

    getListRestaurants(): Observable<Restaurant[]> { //metodo
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json()) // ver com Bridi
            .catch(ErrorHandler.handleError) //cuida das msgs de erro

    }

    restaurantById(id: string): Observable<Restaurant> { //metodo
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError) //cuida das msgs de erro
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError) //cuida das msgs de erro
    }
}