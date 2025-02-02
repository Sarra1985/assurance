import { NgIf } from '@angular/common';
import { Component, Input, OnInit, Output ,EventEmitter, OnChanges} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video-popup',
  standalone: true,
  imports: [
    NgIf,

  ],
  templateUrl: './video-popup.component.html',
  styleUrl: './video-popup.component.css'
})
export class VideoPopupComponent  implements OnInit,OnChanges {

  @Input('youtubeURL')
  youtubeURL:string|undefined = undefined;

  @Input('show')
  show = true;

  @Output('close')
  onClose= new EventEmitter();
  safeURL!: SafeResourceUrl;

  constructor(private sanitizer:DomSanitizer){}
  disableBodyScrolling(){
    document.body.style.setProperty('overflow','hidden')
  }

  enableBodyScrolling(){
    document.body.style.setProperty('overflow','scroll')
  }

  ngOnInit(): void {
    this.init()
  }

  ngOnChanges(): void {
    this.init()
  }

  init(){
  if(this.show)
    this.disableBodyScrolling()

    this.safeURL =this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeURL as string );

  }

  close(){
    this.enableBodyScrolling()
    this.onClose.emit();
  }
}
