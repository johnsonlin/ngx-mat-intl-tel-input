import { FormControl, ValidationErrors, Validator } from '@angular/forms';
import { parsePhoneNumber, PhoneNumber } from 'libphonenumber-js';
import { parsePhoneNumber as parseMobileNumber } from 'libphonenumber-js/mobile';
import { Inject, Injectable, Optional } from '@angular/core';
import { NGX_MAT_INTL_TEL_INPUT_CONFIG, NgxMatIntlTelInputConfig } from './ngx-mat-intl-tel-input.config';

@Injectable()
export class PhoneNumberValidator implements Validator {
  constructor(@Optional() @Inject(NGX_MAT_INTL_TEL_INPUT_CONFIG) private config: NgxMatIntlTelInputConfig) {
  }

  validate(control: FormControl): ValidationErrors | null {
    const error = {validatePhoneNumber: true};
    let numberInstance: PhoneNumber;
    if (control.value) {
      try {
        numberInstance = (this.config?.mobileOnly ? parseMobileNumber : parsePhoneNumber)(control.value);
      } catch (e) {
        control.setValue(null);
        return error;
      }

      if (numberInstance && !numberInstance.isValid()) {
        control.setValue(null);
        if (!control.touched) {
          control.markAsTouched();
        }
        return error;
      }
    }
    return null;
  }
}
