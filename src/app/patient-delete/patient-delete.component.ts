import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent {
  patientid=""

  patientDel=()=>
  {
    let data:any={"patientid":this.patientid}
    console.log(data)
  }

}
