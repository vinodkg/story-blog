import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor() { }

  LOGGER = {
    LOG : (message: any) => {
      this.__LOG_MESSAGE(message, 'log');
    },
    LOG_DEBUG : (message: any) => {
      this.__LOG_MESSAGE(message, 'debug');
    },
    LOG_INFO : (message: any) => {
      this.__LOG_MESSAGE(message, 'info');
    },
    LOG_ERROR : (message: any) => {
      this.__LOG_MESSAGE(message, 'error');
    },
    LOG_WARN : (message: any) => {
      this.__LOG_MESSAGE(message, 'warn');
    }
  };

  // Private Methods
  private __LOG_MESSAGE(message: string, logType: string): void {
    console[logType](message);
  }

  // Public Methods
  GET_RANDOM_NUMBER(minimum?: number, maximum?: number): number {
    let randomNumber = Math.random();
    if (arguments.length) {
      if (arguments.length === 1) {
        minimum = 0;
      }
      randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }
    return randomNumber;
  }

  GET_TIMESTAMP(): number {
    const timeStamp = new Date().getTime();
    return timeStamp;
  }

  SHOW_MESSAGE(message: string): void {
    window.alert(message);
  }

  SCROLL_TO_TOP(): void {
    window.scrollTo(0, 0);
  }
}
