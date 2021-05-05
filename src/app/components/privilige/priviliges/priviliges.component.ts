import { Privilege } from './../../../models/privilege';
import { PrivilegeService } from './../../../services/privilege.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-priviliges',
  templateUrl: './priviliges.component.html',
  styleUrls: ['./priviliges.component.css']
})
export class PriviligesComponent implements OnInit {

  privileges : Privilege[] = null;

  constructor(private privilegeService: PrivilegeService) { }

  ngOnInit(): void {
    this.getAllPrivileges();
  }

  getAllPrivileges(){
    this.privilegeService.getPrivileges().subscribe((res: Privilege[]) => {
      console.log(res);
      this.privileges = res;
    })
  }

  delete(privilegeId: number){
    console.log(privilegeId);
    if(confirm("Are you sure you want to delete !")){
      this.privilegeService.deletePrivilege(privilegeId).subscribe((res: any) =>{
        if(res){
          this.getAllPrivileges();
        }
      },
      err => {alert(err.Message)}
      );
    }
  }
}
