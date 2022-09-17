import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Injectable({
providedIn:'root'
})
export class FacesnapsService{
    facesnaps:FaceSnap[]=[{
        id:1,
        title:"docker",
        description: "lorem lorem lorem",
        createdDate:new Date(),
        snaps:300,
        imageUrl:"https://miro.medium.com/max/965/1*Lo7STTiHR8itupWJO02NhQ.png",
        location:"sfax"
  
  },
  {   
    id:2,
    title:"ansible",
      description:"lorem lorem lorem",
      createdDate:new Date(),
      imageUrl:"https://i0.wp.com/datascientest.com/wp-content/uploads/2022/06/ansible.png.webp?fit=800%2C450",
      snaps: 0,
      
      
  },
  {  
    id:3,
    title:"redhat",
      description:"lorem lorem lorem",
      createdDate:new Date(),
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-2jBJ7ux9aFW8vOJpNQUKkDptFwGjsfAtByODuG2_FL2MfPAT6X_IGoWdjJt8MoyYDU&usqp=CAU",
      snaps: 0,
      
      
  },
  {  
    id:4,
    title:"kubernetes",
      description:"lorem lorem lorem",
      createdDate:new Date(),
      imageUrl:"https://www.retengr.com/wp-content/uploads/2021/02/Kubernetes-logo-1024x576.png",
      snaps: 0,
      
      
  }
  
  
  ];
  getFacesnap():FaceSnap[]{
    return this.facesnaps
   }
   getFacesnapById(id:number):FaceSnap{
    const facesnap=this.facesnaps.find(facesnaps =>facesnaps.id==id);
    if (facesnap){                                  
        return facesnap
    }else{
        throw new Error("face snap not exist ");
    }

    
    
   }

   snaps(facesnapId:number,button:'snap'|'unsnap'):void
   {
    const facesnap=this.getFacesnapById(facesnapId);
    button=='unsnap'?facesnap.snaps++:facesnap.snaps--;
   
   
}
}