import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';  
import { NotificationsComponent } from '../notifications/notifications.component';  
/*import { Notify2Component } from '../notify2/notify2.component';*/

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.page.html',
  styleUrls: ['./doctor-list.page.scss'],
})
export class DoctorListPage {

  constructor(public popoverCtrl: PopoverController) {}
  async notifications(ev: any) {  
    const popover = await this.popoverCtrl.create({  
        component: NotificationsComponent,  
        event: ev,  
        animated: true,  
        showBackdrop: true  
    });  
  
      /*async notifi2(eve: any) {  
      const popover = await this.popoverCtrl.create({  
          component: Notify2Component,  
          event: eve,  
          animated: true,  
          showBackdrop: true  
      });*/


    return await popover.present();  
  }  

  ngOnInit() {
  }
  }
