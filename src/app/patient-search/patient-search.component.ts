import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {
  id=""

 patientSearch=()=>
  {
    let data:any={"id":this.id}
    console.log(data)
  }
}
