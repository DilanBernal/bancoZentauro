import { Component } from '@angular/core';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class BackupComponent {

  onSubmitCon() {
    console.log("funciono backup")
  }
}
