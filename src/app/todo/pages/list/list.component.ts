import { Component } from '@angular/core';
import { NoteModel } from '../../../_models/note.model';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [NgForOf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  notesList: NoteModel[] = [
    new NoteModel(1, 'Test Note', 'Test Description Note', new Date()),
    new NoteModel(2, 'Test Note2', 'Test Description Note', new Date()),
    new NoteModel(3, 'Test Note3', 'Test Description Note', new Date()),
  ]

  deleteNote(id: number) {
    var index = this.notesList.findIndex(x => x.id === id)
    this.notesList.splice(index, 1);
  }
}
