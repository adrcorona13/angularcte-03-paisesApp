import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
    selector: 'app-pais-input',
    templateUrl: 'pais-input.component.html'
})
export class PaisInput implements OnInit{
    
    termino: string = "";

    @Input()
    placeholder: string = "";

    @Output()
    onEnter: EventEmitter<string> = new EventEmitter();

    @Output()
    onDebounce: EventEmitter<string> = new EventEmitter();

    debouncer: Subject<string> = new Subject();

    ngOnInit(): void {
        this.debouncer
        .pipe(
            debounceTime(300)
        )
        .subscribe( valor => {
            this.onDebounce.emit(valor);
            console.log(valor);
            
        });
    }

    buscar(){
        this.onEnter.emit(this.termino);       
    }

    teclaPresionada(event: any){
        // const valor = event.target.value;
        this.debouncer.next(this.termino);
    }
}