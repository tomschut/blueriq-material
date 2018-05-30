import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {BlueriqComponents, BlueriqModule} from '@blueriq/angular';
import {V1BackendModule} from '@blueriq/angular/backend/v1';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import { ProjectComponent } from './blueriq/project/project.component';
import {ButtonComponent} from './blueriq/material/button/button.component';
import {ContainerComponent} from './blueriq/material/container/container.component';
import {FieldComponent} from './blueriq/material/field/field.component';
import {MaterialModule} from './blueriq/material/material/material.module';
import {PageComponent} from './blueriq/material/page/page.component';
import {TextItemComponent} from './blueriq/material/textitem/textitem.component';
import { FieldCharacteristicsComponent } from './blueriq/common/field-characteristics/field-characteristics.component';
import {ElementComponent} from './blueriq/generic/element/element.component';
import {BlueriqFormsModule} from '@blueriq/angular/forms';

const routes: Routes = [
  { path: 'session/:sessionId', component: ProjectComponent },
];

const BQ_COMPONENTS = [
  PageComponent,
  ContainerComponent,
  TextItemComponent,
  ButtonComponent,
  FieldComponent,
];

const BQ_MAT_COMPONENTS = [
  FieldCharacteristicsComponent,
  ElementComponent
];

@NgModule({
  declarations: [
    AppComponent,
    BQ_COMPONENTS,
    BQ_MAT_COMPONENTS,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, ) ,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BlueriqModule.forRoot(),
    V1BackendModule.forRoot({
      baseUrl: '../server',
    }),
    BrowserAnimationsModule,
    BlueriqFormsModule.forRoot(),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BlueriqComponents.register(BQ_COMPONENTS),
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
