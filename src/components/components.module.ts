import { NgModule } from '@angular/core';
import { TrophyComponent } from './trophy/trophy';
import { ResponseComponent } from './response/response';
@NgModule({
  declarations: [
    TrophyComponent,
    ResponseComponent
  ],
  imports: [],
  exports: [
    TrophyComponent,
    ResponseComponent
  ]
})
export class ComponentsModule {}
