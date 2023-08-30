import { NgModule } from "@angular/core";

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
    imports: [MatSidenavModule, 
              MatButtonModule,
              MatToolbarModule,
              MatIconModule,
              FlexLayoutModule,
              MatFormFieldModule,
              MatInputModule,
              FormsModule,
              MatDialogModule,
              MatCardModule,
              MatGridListModule,
              MatTableModule,
              MatTabsModule,
              MatSortModule,
              MatPaginatorModule,
              MatListModule,
              MatSelectModule],
    exports:[MatSidenavModule, 
             MatButtonModule,
             MatToolbarModule,
             MatIconModule,
             FlexLayoutModule,
             MatFormFieldModule,
             MatInputModule,
             FormsModule,
             MatDialogModule,
             MatCardModule,
             MatGridListModule,
             MatTableModule,
             MatTabsModule,
             MatSortModule,
             MatPaginatorModule,
             MatListModule,
             MatSelectModule]
})

export class MaterialModule { }