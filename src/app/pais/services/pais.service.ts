import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { Country } from "../interfaces/pais.interface";

@Injectable({
    providedIn: 'root'
})
export class PaisService{

    private apiUrl: string = 'https://restcountries.com/v2';
    
    constructor(private http: HttpClient) {}

    buscarPais(termino: string): Observable<Country[]>{
        const url = `${this.apiUrl}/name/${termino}`;
        return this.http.get<Country[]>(url);
            // .pipe(
            //     catchError( err => of(['hola']))
            // );
    }

    buscarCapital(termino: string): Observable<Country[]>{
        const url = `${this.apiUrl}/capital/${termino}`;
        return this.http.get<Country[]>(url);
    }

    buscarPaisPorCodigo(codigo: string): Observable<Country>{
        const url = `${this.apiUrl}/alpha/${codigo}`;
        return this.http.get<Country>(url);
    }
    
}