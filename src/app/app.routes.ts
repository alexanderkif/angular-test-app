import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

export const routes: Routes = [
  {
    path: 'posts',
    component: PostsListComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },
];
