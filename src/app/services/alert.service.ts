import { Injectable } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { MediaBreakpointService } from './media-breakpoint.service';

@Injectable()
export class AlertService {
  header: any;
  // userAgent = navigator.userAgent;
  position:any;
  constructor(private toastr: Ng2IzitoastService, private mbs: MediaBreakpointService) {
    // let checker = {
    //   iphone: this.userAgent.match(/(iPhone|iPod)/)
    // }

    console.log(mbs.getMedia());

    this.position = mbs.getMedia() === 'xs' || mbs.getMedia() === "s" ? 'center' : "topCenter"

  }

  error(message: string) {
    this.toastr.error({
      title: 'Error',
      message: message,
      position: this.position,
    });
  }

  warning(message: string) {
    this.toastr.warning({
      title: 'Perhatian',
      message: message,
      position: this.position,
    });
  }

  success(message: string) {
    this.toastr.success({
      title: 'Sukses',
      message: message,
      position: this.position,
    });
  }

  info(message: string) {
    this.toastr.success({
      title: 'Info',
      message: message,
      position: this.position,
    });
  }

  alert(message: string) {
    this.toastr.question({
      title: 'Perhatian!',
      message: 'Apakah anda yakin akan approve Nota Dinas',
      progressBar: false,
      // progressBarColor: "green",
      close: true,
      zindex: '9999',
      buttons: [
        [
          '<button><b>Ya</b></button>',
          (instance, toast) => {
            this.closeToast(instance, toast);
          },
          true,
        ],
        [
          '<button>Tidak</button>',
          (instance, toast) => {
            this.closeToast(instance, toast);
          },
        ],
      ],
      onClosed: () => {
        // console.log('closed');
      },
    });
  }

  closeToast(instance, toast) {
    instance.hide({ transitionOut: "fadeOut" }, toast, "buttonName");
  }
}
