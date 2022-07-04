import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {Directus, DirectusOptions} from '@directus/sdk';
import {HttpClientTransportService} from './http-client-transport.service';
import {HttpClientModule} from '@angular/common/http';

export interface NgxDirectusConfig {
  url: string,
  options?: DirectusOptions,
  useHttpClient?: boolean
}

export const NGX_DIRECTUS_CONFIG = new InjectionToken<NgxDirectusConfig>('NGX_DIRECTUS_CONFIG');

@NgModule({
  imports: [
    HttpClientModule
  ],
})
export class NgxDirectusModule {

  public static forRoot(config: NgxDirectusConfig): ModuleWithProviders<NgxDirectusModule> {
    return {
      ngModule: NgxDirectusModule,
      providers: [
        HttpClientTransportService,
        {provide: NGX_DIRECTUS_CONFIG, useValue: config},
        {
          provide: Directus,
          useFactory: (transport: HttpClientTransportService) => {
            const {url, options, useHttpClient} = config;

            if (useHttpClient || useHttpClient === undefined) {
              return new Directus(url, {...options, transport});
            }
            return new Directus(url, options);
          },
          deps: [HttpClientTransportService]
        },
      ]
    }
  }

}
