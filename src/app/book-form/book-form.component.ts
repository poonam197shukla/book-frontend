import { Component, EventEmitter, Output } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  title: string = '';
  author: string = '';

  @Output() bookAdded = new EventEmitter<void>();

  constructor(private bookService: BookService) { }

  addBook(): void {
    const newBook = { title: this.title, author: this.author };
    this.bookService.addBook(newBook).subscribe(() => {
      this.bookAdded.emit();
      this.title = '';
      this.author = '';
    });
  }
}
