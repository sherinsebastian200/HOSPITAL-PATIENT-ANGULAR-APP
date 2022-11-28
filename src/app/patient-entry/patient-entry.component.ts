import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
  name=""
  id=""
  address=""
  contact=""
  dateofappointment=""
  image=""
  docname=""



  patientEntry=()=>
  {
   
  let data:any={"name":this.name,"id":this.id,"address":this.address,"contact":this.contact,"dateofappointment":this.dateofappointment,"image":this.image,"docname":this.docname}
  console.log(data)
  }

}
