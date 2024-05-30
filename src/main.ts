import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { WebDesignComponent } from './app/web-design/web-design.component';
import { HomeComponent } from './app/home/home.component';
import { FooterComponent } from './app/footer/footer.component';
import { AppDesignComponent } from './app/app-design/app-design.component';
import { GraphicDesignComponent } from './app/graphic-design/graphic-design.component';

const routes: Route[] = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'web-design', component: WebDesignComponent },
  { path: 'app-design', component: AppDesignComponent },
  { path: 'graphic-design', component: GraphicDesignComponent },


  { path: 'footer', component: FooterComponent }

];


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
.catch(err => console.error(err));