import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-cv-en',
  standalone: false,
  templateUrl: './cv-en.component.html',
  styleUrl: './cv-en.component.css'
})
export class CvEnComponent  implements OnInit {
  pdfSrc: SafeResourceUrl | any;
  pdfUrl = 'assets/sample.pdf';

  constructor(private sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl('assets/VelemiAgnes_CV_2025_en_1.pdf');
    // this.previewurl=this.sanitizer.bypassSecurityTrustUrl("https://mozilla.github.io/pdf.js/web/viewer.html");
  }
}
