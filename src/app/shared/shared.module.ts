import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations:[
        SidebarComponent
    ],
    exports:[
        SidebarComponent
    ],
    imports:[]
})
export class SharedModule{}