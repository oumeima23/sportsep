import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamServicesService } from 'src/app/services/team-services.service';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addTeamForm:FormGroup;
  obj:any={};
 


  constructor(private teamService:TeamServicesService) { }

  ngOnInit() {
   
  }

  addTeam(){
    console.log("here team obj",this.obj);
    this.teamService.addTeam(this.obj).subscribe(
      (data)=>{
        console.log('here data',data);
        
      }
    )
    
  }
 


}
