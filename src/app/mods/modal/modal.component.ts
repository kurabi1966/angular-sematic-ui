import { Component, OnInit, ElementRef,  Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter()
  @Output() ok = new EventEmitter()
  @Input() showCancel = false
  
  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy(){
    this.el.nativeElement.remove();
  }

  onCloseClick(){
    this.close.emit()
  }
  onOkClick(){
    this.ok.emit()
  }
}
