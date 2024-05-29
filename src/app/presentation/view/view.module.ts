import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [],
  imports: [PagesModule, CommonModule],
  exports: [PagesModule],
})
export class ViewModule {}
