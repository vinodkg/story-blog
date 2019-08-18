import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  DEFAULT_IMAGES = {
    STORY_COVER : 'assets/images/story-image.jpg',
    COMPANY_LOGO : 'assets/images/company-logo.png'
  };

  ROUTE_PATHS = {
    DEFAULT : '',
    HOME : 'home',
    POSITIONS : 'positions',
    REFERRALS : 'referrals',
    NEW_STORY: 'newstory'
  };

  JOB_STATUS_LABELS = {
    ACTIVE : 'Active',
    CLOSING_SOON : 'Closing Soon',
    CLOSED : 'Closed',
    OTHER : 'NA'
  };

  STORY_DEFAULT_LABELS = {
    TITLE : 'Your title here!',
    IMAGE : this.DEFAULT_IMAGES.STORY_COVER,
    CONTENT : 'Your content here!',
    EMPTY : ''
  };

  APPLICATION_STATUS_LABELS = {
    APPLIED : 'Applied',
    IN_PROCESS : 'In Process',
    HIRED : 'Hired',
    NOT_HIRED : 'Not Hired',
    OTHER : 'NA'
  };

  MESSAGES = {
    STORY_CREATION_SUCCESSFUL : 'Your story created successfully',
    STORY_CREATION_FAILED : 'Story creation failed',
    STORY_CREATION_ERROR : 'Error while creating story',
    STORY_CREATION_FORM_INVALID : 'Please fill all the details!',
    PENDING_FEATURE : 'Coming Soon!'
  };
}
