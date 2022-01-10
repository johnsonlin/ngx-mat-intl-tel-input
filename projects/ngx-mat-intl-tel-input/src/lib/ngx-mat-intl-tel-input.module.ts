import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatIntlTelInputComponent } from './ngx-mat-intl-tel-input.component';
import { SearchPipe } from './search.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {
  DEFAULT_NGX_MAT_INTL_TEL_INPUT_CONFIG,
  NGX_MAT_INTL_TEL_INPUT_CONFIG,
  NgxMatIntlTelInputConfig,
} from './ngx-mat-intl-tel-input.config';

@NgModule({
  declarations: [
    NgxMatIntlTelInputComponent,
    SearchPipe,
  ],
  imports:[
    CommonModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: NGX_MAT_INTL_TEL_INPUT_CONFIG,
    useValue: DEFAULT_NGX_MAT_INTL_TEL_INPUT_CONFIG,
  }],
  exports: [NgxMatIntlTelInputComponent]
})
export class NgxMatIntlTelInputModule {
  static forRoot(config: NgxMatIntlTelInputConfig = DEFAULT_NGX_MAT_INTL_TEL_INPUT_CONFIG): ModuleWithProviders<NgxMatIntlTelInputModule> {
    return {
      ngModule: NgxMatIntlTelInputModule,
      providers: [
        { provide: NGX_MAT_INTL_TEL_INPUT_CONFIG, useValue: config }
      ]
    };
  }

  static forChild(config: NgxMatIntlTelInputConfig = DEFAULT_NGX_MAT_INTL_TEL_INPUT_CONFIG): ModuleWithProviders<NgxMatIntlTelInputModule> {
    return {
      ngModule: NgxMatIntlTelInputModule,
      providers: [
        { provide: NGX_MAT_INTL_TEL_INPUT_CONFIG, useValue: config }
      ]
    };
  }
}
