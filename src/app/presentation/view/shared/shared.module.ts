import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule, ToolbarModule],
})
export class SharedModule {}
