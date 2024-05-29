import { PresentationModule } from './presentation/presentation.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './presentation/view/shared/toolbar/toolbar.component';
import { DataModule } from './data/data.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DomainModule } from './domain/domain.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PresentationModule,
    DataModule,
    DomainModule,
    ToolbarComponent,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
