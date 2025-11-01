/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from "@angular/platform-browser";
import { App } from "./app/app";
import {
  PreloadAllModules,
  provideRouter,
  withDebugTracing,
  withPreloading,
} from "@angular/router";
import { APP_ROUTES } from "./app/app.routes";

bootstrapApplication(App, {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(
      APP_ROUTES,
      withPreloading(PreloadAllModules),
      withDebugTracing()
    ),
  ],
}).catch((err) => console.error(err));
