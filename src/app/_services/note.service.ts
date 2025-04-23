import { Injectable } from '@angular/core';
import { NoteModel } from '../_models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notesList: NoteModel[] = [
    new NoteModel(1, 'Sirjan', 'Test Description Note', new Date()),
    new NoteModel(2, 'Isfahan', 'Test Description Note', new Date()),
    new NoteModel(3, 'Shiraz', 'Test Description Note', new Date()),
  ]
  

  constructor() { }

  deleteNote(id: number) {
    var index = this.notesList.findIndex(x => x.id === id)
    this.notesList.splice(index, 1);
  }
}
