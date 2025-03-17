import {Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about-this-project',
  standalone: false,
  templateUrl: './about-this-project.component.html',
  styleUrl: './about-this-project.component.css'
})
export class AboutThisProjectComponent implements OnInit {
  pdfSrc: SafeResourceUrl | any;
  pdfUrl = 'assets/sample.pdf';

  constructor(private sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl('assets/FlywayPresentatiton.pdf');
    // this.previewurl=this.sanitizer.bypassSecurityTrustUrl("https://mozilla.github.io/pdf.js/web/viewer.html");
  }
}
