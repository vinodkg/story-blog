import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RequestData, RequestTypes } from '../../models/request.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebService {
  private BASE_URL = "";
  
  constructor(private httpClient: HttpClient) { 

  }

  processRequest(request: RequestData){
    switch(request.method){
      case RequestTypes.GET:
        this.get(request);
        break;
    }
  }

  get(request: RequestData): Observable<Object> {
    const queryParams = this.getQueryParams(request.queryParams);
    const pathParams = this.getPathParams(request.pathTemplate, request.pathParams);
    const requestHeaders = this.getHeaders(request.headers);
    const url = this.BASE_URL + request.url + pathParams;
    return this.httpClient.get(url, {
      params: queryParams,
      headers: requestHeaders,
      observe: 'response'
    });
  }


  // Helpers

  /* 
    Query params: id=12&page=10
  */
  getQueryParams(queryParams: [{"key" : "", "value" : ""}]):HttpParams {
    let params = new HttpParams();
    for(let i=0; i<queryParams.length; i++){
      params = params.append(queryParams[i]["key"], queryParams[i]["value"]);
    }
    return params;
  }

  /* 
    Path params: Base url + /username/accounts/10
  */   

  getPathParams(pathTemplate:string, pathParams: [{"key" : "", "value" : ""}]):string {
    for(let i=0; i<pathParams.length; i++){
      let pathKey = new RegExp("{" + pathParams[i]["key"] + "}");
      pathTemplate = pathTemplate.replace(pathKey, pathKey[i]["value"]);
    }
    return pathTemplate;
  }

  /* 
    Request Headers
  */

  getHeaders(requestHeaders: [{"key" : "", "value" : ""}]): HttpHeaders{
    let headers = new HttpHeaders();
    for(let i=0; i<requestHeaders.length; i++){
      headers = headers.append(requestHeaders[i]["key"], requestHeaders[i]["value"]);
    }
    return headers;
  }

}
