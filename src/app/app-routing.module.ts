import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contact',
    loadChildren:() => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'news',
    loadChildren:() => import('./modules/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'events',
    loadChildren:() => import('./modules/events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'store',
    loadChildren:() => import('./modules/store/store.module').then(m => m.StoreModule)
  },
  {
    path: '**',
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
