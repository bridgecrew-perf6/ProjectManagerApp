import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, map, Subscription, switchMap } from 'rxjs';
import { TRANSLATE } from 'src/app/shared/consts/translate';
import { IBoards } from 'src/app/shared/interfaces/interfaces';
import { BoardService } from 'src/app/shared/services/board.service';
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
})
export class BoardListComponent implements OnInit {
  constructor(
    private boardService: BoardService,
    private langService: LangService
  ) {}
  private subs!: Subscription;
  boardList$ = new BehaviorSubject<IBoards[]>([]);
  private subsLang!: Subscription;
  public lang$ = this.langService.lang$;
  boardsText = TRANSLATE.en.boards;

  ngOnInit(): void {
    this.subs = this.boardService.getBoards().subscribe((items) => {
      this.boardList$.next(items);
      console.log('board list', this.boardList$);
    });
    this.subsLang = this.langService.lang$.subscribe((lang) => {
      this.boardsText =
        lang === 'English' ? TRANSLATE.en.boards : TRANSLATE.ru.boards;
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.subsLang.unsubscribe();
  }
}
