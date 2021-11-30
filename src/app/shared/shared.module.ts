import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbThemeModule, NbWindowModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { HttpService } from '../services/http.service';
import * as page from './';
import * as directives from './directives';

const _COMPONENTS = [];

@NgModule({
  imports: [
    ...page.UIModule,
    ThemeModule,

    NbThemeModule,
    FormsModule,
    NbWindowModule.forChild(),
    ReactiveFormsModule
  ],
  exports: [
    NbThemeModule,
    ReactiveFormsModule,
    FormsModule,
    ..._COMPONENTS,
    directives.DigitOnlyDirective,
  ],
  providers: [HttpService],
  declarations: [..._COMPONENTS, directives.DigitOnlyDirective],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: LOCALE_ID,
          useValue: 'id-ID',
        },
      ],
    };
  }
}
