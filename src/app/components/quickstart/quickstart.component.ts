import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-quickstart',
  standalone: false,
  templateUrl: './quickstart.component.html',
  styleUrl: './quickstart.component.css'
})
export class QuickstartComponent implements OnInit {
  pdfSrc: SafeResourceUrl | any;
  pdfUrl = 'assets/sample.pdf';

  constructor(private sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl('assets/FW_Quick_Start.pdf');
    // this.previewurl=this.sanitizer.bypassSecurityTrustUrl("https://mozilla.github.io/pdf.js/web/viewer.html");
  }
}
