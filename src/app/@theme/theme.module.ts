import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import * as comp from './components';
import * as nb from '@nebular/theme';

const NB_MODULES = [
  nb.NbLayoutModule,
  nb.NbMenuModule,
  nb.NbUserModule,
  nb.NbActionsModule,
  nb.NbSearchModule,
  nb.NbSidebarModule,
  nb.NbContextMenuModule,
  nb.NbButtonModule,
  nb.NbSelectModule,
  nb.NbIconModule,
  NbEvaIconsModule,
];

const COMPONENTS = [comp.HeaderComponent, comp.SearchInputComponent];

@NgModule({
  imports: [CommonModule, ...NB_MODULES],
  exports: [CommonModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]
        ).providers,
      ],
    };
  }
}
