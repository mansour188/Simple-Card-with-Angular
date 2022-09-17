import {Component ,Input,OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FacesnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {
  @Input() _snap!:FaceSnap;

  constructor(private facesnapService:FacesnapsService,private route:Router){};
 
  buton!:string;
  ngOnInit(){
    
    this.buton="snap"
  }
  Onview(){
    this.route.navigateByUrl(`facesnap/${this._snap.id}`);
    
     
  }

}
