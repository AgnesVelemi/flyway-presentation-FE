import {Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-intro',
  standalone: false,
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent implements OnInit {
  pdfSrc: SafeResourceUrl | any;
  pdfUrl = 'assets/sample.pdf';

  constructor(private sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl('assets/FW_Intro.pdf');
 // this.previewurl=this.sanitizer.bypassSecurityTrustUrl("https://mozilla.github.io/pdf.js/web/viewer.html");
  }
}
