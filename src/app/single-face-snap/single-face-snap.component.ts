import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FacesnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  _snap!:FaceSnap;

  constructor(private facesnapService:FacesnapsService , private route:ActivatedRoute){};
 
  buton!:string;
  ngOnInit(){
    
    this.buton="snap"
    const facesnapId=+this.route.snapshot.params['id'];
    this._snap=this.facesnapService.getFacesnapById(facesnapId);
  }
  Onclic(){
    if (this.buton==="snap"){
      this.buton="unsnap";
      this.facesnapService.snaps(this._snap.id,"snap");
    }else{
      this.buton="snap";
      this.facesnapService.snaps(this._snap.id,"unsnap");
    }
    
  }


}
