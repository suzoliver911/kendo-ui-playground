import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import '!svg-sprite-loader!node_modules/bootstrap-icons/icons/circle.svg';
import '!svg-sprite-loader!node_modules/bootstrap-icons/icons/circle-fill.svg';
import '!svg-sprite-loader!node_modules/bootstrap-icons/icons/arrow-clockwise.svg';
import '!svg-sprite-loader!node_modules/bootstrap-icons/icons/arrow-clockwise.svg';
import '!svg-sprite-loader!node_modules/bootstrap-icons/icons/slash-circle.svg';
import '!svg-sprite-loader!node_modules/bootstrap-icons/icons/x-circle.svg';
import '!svg-sprite-loader!node_modules/bootstrap-icons/icons/x.svg';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
