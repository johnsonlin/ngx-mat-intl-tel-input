import { InjectionToken } from '@angular/core';

export interface NgxMatIntlTelInputConfig {
  mobileOnly: boolean;
}

export const NGX_MAT_INTL_TEL_INPUT_CONFIG = new InjectionToken<NgxMatIntlTelInputConfig>('NGX_MAT_INTL_TEL_INPUT_CONFIG');

export const DEFAULT_NGX_MAT_INTL_TEL_INPUT_CONFIG: NgxMatIntlTelInputConfig = {
  mobileOnly: false
};
