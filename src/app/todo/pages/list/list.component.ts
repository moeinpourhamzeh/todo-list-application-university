import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NoteService } from '../../../_services/note.service';
import { NoteModel } from '../../../_models/note.model';

@Component({
  selector: 'app-list',
  imports: [NgForOf, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  notesList: NoteModel[] = []

  constructor(private noteService: NoteService) {
    this.notesList = this.noteService.notesList
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id)
  }
}
