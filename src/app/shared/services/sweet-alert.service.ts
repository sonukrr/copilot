import { Injectable } from '@angular/core';
declare let Swal: any;

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert: any = Swal;

  private Toast: any = Swal.mixin({
    toast: true,
    width: 'auto',
    position: 'top',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast: any) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  constructor() { }

  toast(messageType: string, message: string) {
    this.Toast.fire({
      icon: messageType,
      title: message
    });
  }

}