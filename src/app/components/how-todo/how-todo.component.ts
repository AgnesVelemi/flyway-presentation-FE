import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-how-todo',
  standalone: false,
  templateUrl: './how-todo.component.html',
  styleUrl: './how-todo.component.css'
})
export class HowTodoComponent implements OnInit {
  pdfSrc: SafeResourceUrl | any;
  pdfUrl = 'assets/sample.pdf';

  constructor(private sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl('assets/FW_KnowHow.pdf');
    // this.previewurl=this.sanitizer.bypassSecurityTrustUrl("https://mozilla.github.io/pdf.js/web/viewer.html");
  }
}
