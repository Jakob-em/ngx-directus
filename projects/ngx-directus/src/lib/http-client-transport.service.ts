import {Inject, Injectable} from '@angular/core';
import {ITransport, TransportRequestOptions, TransportResponse} from '@directus/sdk';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {NGX_DIRECTUS_CONFIG, NgxDirectusConfig} from './ngx-directus.module';

@Injectable()
export class HttpClientTransportService extends ITransport {

  constructor(private httpClient: HttpClient, @Inject(NGX_DIRECTUS_CONFIG) private config: NgxDirectusConfig) {
    super();
  }

  delete<T, P, R>(path: string, data?: P, options?: TransportRequestOptions): Promise<TransportResponse<T, R>> {
    return firstValueFrom(this.httpClient.delete<TransportResponse<T, R>>(path, {
      headers: options?.headers,
      params: options?.params,
      body: data
    },)) as Promise<TransportResponse<T, R>>;
  }

  get<T, R>(path: string, options?: TransportRequestOptions): Promise<TransportResponse<T, R>> {
    return firstValueFrom(this.httpClient.get<TransportResponse<T, R>>(this.config.url + path, {
      headers: options?.headers,
      params: options?.params,
    },)) as Promise<TransportResponse<T, R>>;
  }

  head<T, R>(path: string, options?: TransportRequestOptions): Promise<TransportResponse<T, R>> {
    return firstValueFrom(this.httpClient.head<TransportResponse<T, R>>(this.config.url + path, {
      headers: options?.headers,
      params: options?.params,
    },)) as Promise<TransportResponse<T, R>>;
  }

  options<T, R>(path: string, options?: TransportRequestOptions): Promise<TransportResponse<T, R>> {
    return firstValueFrom(this.httpClient.options<TransportResponse<T, R>>(this.config.url + path, {
      headers: options?.headers,
      params: options?.params,
    },)) as Promise<TransportResponse<T, R>>;
  }

  patch<T, P, R>(path: string, data?: P, options?: TransportRequestOptions): Promise<TransportResponse<T, R>> {
    return firstValueFrom(this.httpClient.patch<TransportResponse<T, R>>(this.config.url + path, {
      headers: options?.headers,
      params: options?.params,
      body: data
    },)) as Promise<TransportResponse<T, R>>;
  }

  post<T, P, R>(path: string, data?: P, options?: TransportRequestOptions): Promise<TransportResponse<T, R>> {
    return firstValueFrom(this.httpClient.patch<TransportResponse<T, R>>(this.config.url + path, {
      headers: options?.headers,
      params: options?.params,
      body: data
    },)) as Promise<TransportResponse<T, R>>;
  }

  put<T, P, R>(path: string, data?: P, options?: TransportRequestOptions): Promise<TransportResponse<T, R>> {
    return firstValueFrom(this.httpClient.patch<TransportResponse<T, R>>(this.config.url + path, {
      headers: options?.headers,
      params: options?.params,
      body: data
    },)) as Promise<TransportResponse<T, R>>;
  }
}
