import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() show: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.show = false;
    this.closeModal.emit();
  }

  onClose(event: Event) {
    this.close();
  }

  preventClose(event: Event) {
    event.stopPropagation();
  }
}
