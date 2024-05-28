import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [PagesModule, CommonModule, SharedModule],
  exports: [PagesModule],
})
export class ViewModule {}
