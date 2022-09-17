import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ListFaceSnapComponent } from "./list-face-snap/list-face-snap.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";

const routes:Routes=[
    {path:'facesnap/:id',component:SingleFaceSnapComponent},
    {path:'facesnap',component:ListFaceSnapComponent},
    {path:"",component:LandingPageComponent}
];
@NgModule({

    imports:[RouterModule.forRoot(routes)
    ],
exports:[RouterModule]
}
)
export class AppRoutingModule {}