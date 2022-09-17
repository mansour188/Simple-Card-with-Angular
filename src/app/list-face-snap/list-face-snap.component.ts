import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import {FacesnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-list-face-snap',
  templateUrl: './list-face-snap.component.html',
  styleUrls: ['./list-face-snap.component.scss']
})
export class ListFaceSnapComponent implements OnInit {
  facesnaps!:FaceSnap[];

  constructor(private facesnapsService:FacesnapsService){};
  ngOnInit(): void {
    this.facesnaps=this.facesnapsService.getFacesnap();

   
  }



}
