import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AwardListComponent,AwardPreviewComponent,AwardEditorComponent } from './award-helpers';
import { SubscriptionListComponent,SubscriptionPreviewComponent,SubscriptionEditorComponent } from './subscription-helpers';
import { UserListComponent,UserPreviewComponent,UserEditorComponent } from './user-helpers';
import { ProductListComponent } from './product-helpers';


import { ShowAuthedDirective } from './show-authed.directive';
// import { FavoriteButtonComponent, FollowButtonComponent } from './buttons';
// import { ListErrorsComponent } from './list-errors.component';
// import { ShowAuthedDirective } from './show-authed.directive'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    AwardListComponent,
    AwardPreviewComponent,
    AwardEditorComponent,
    SubscriptionListComponent,
    SubscriptionPreviewComponent,
    SubscriptionEditorComponent,
    UserListComponent,
    UserPreviewComponent,
    UserEditorComponent,
    ProductListComponent,
    ShowAuthedDirective
  ],
  exports: [
    ProductListComponent,
    AwardListComponent,
    AwardPreviewComponent,
    AwardEditorComponent,
    SubscriptionListComponent,
    SubscriptionPreviewComponent,
    SubscriptionEditorComponent,
    UserListComponent,
    UserPreviewComponent,
    UserEditorComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ShowAuthedDirective
  ]
})
export class SharedModule {}