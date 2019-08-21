export enum RequestTypes {
    "GET",
    "POST",
    "PUT",
    "DELETE"
}

export enum ReturnResponseType {
    "FULL_RESPONSE" = 'response',
    "BODY" = 'body'
}

export enum ResponseType {
    "BLOB" = "blob",
    "JSON" = "json",
    "TEXT" = "text",
    "ARRAY_BUFFER" = "arraybuffer"
}

export class RequestData {
    method: RequestTypes;
    url: string;
    headers: [{"key" : "", "value" : ""}];
    body: {} | string;
    returnResponseType: string;
    reportProgress: boolean = false;
    withCredentials: boolean = false;
    responseType: ResponseType

    queryParams: [{"key" : "", "value" : ""}];
    pathParams: [{"key" : "", "value" : ""}];
    pathTemplate: string;
}