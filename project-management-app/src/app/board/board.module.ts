import { BoardRoutingModule } from './board-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardComponent } from './board/board.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [BoardListComponent, BoardComponent],
  imports: [CommonModule, MatIconModule, CoreModule,BoardRoutingModule],
  exports: [BoardListComponent, BoardComponent],
  providers: [
    MatDialog,
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class BoardModule {}
