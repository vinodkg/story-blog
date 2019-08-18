import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Story } from '../../models/story.modal';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data/data.service';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utilities/utility.service';
import { ConstantsService } from 'src/app/services/constants/constants.service';

@Component({
  selector: 'newstory',
  templateUrl: './newstory.component.html',
  styleUrls: ['./newstory.component.scss']
})
export class NewstoryComponent implements OnInit {
  storyForm: FormGroup;
  isSubmitted = false;
  coverImagePreviewUrl: string;
  newStoryDetails: Story = new Story(true);
  public imageUrl: SafeUrl;

  constructor(private formBuilder: FormBuilder,
              private sanitizer: DomSanitizer,
              private DATA: DataService,
              private router: Router,
              private UTILS: UtilityService,
              private CONSTANTS: ConstantsService) {
      this.storyForm = this.formBuilder.group({
          title : new FormControl(null, Validators.required),
          summary : new FormControl(null, Validators.required),
          img : new FormControl(null, Validators.required),
          content : new FormControl(null, Validators.required),
      });
      this.storyForm.valueChanges.subscribe((formData) => {
        this.updatePreview(formData);
      });
  }

  updatePreview(formData: NgForm) {
    for (const key in formData) {
      if (key) {
        if (key !== 'img') {
          this.newStoryDetails[key] = formData[key];
          continue;
        }
        if (key === 'img' && !this.coverImagePreviewUrl) {
          this.newStoryDetails.img = this.CONSTANTS.DEFAULT_IMAGES.STORY_COVER;
        }
      }
    }
    this.DATA.viewStoryDetails(this.newStoryDetails);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.storyForm.valid) {
      this.newStoryDetails.createdon = this.UTILS.GET_TIMESTAMP();
      this.newStoryDetails.id = this.UTILS.GET_TIMESTAMP().toString();
      this.DATA.addStories(this.newStoryDetails);
      this.router.navigate(['']);
      this.UTILS.SHOW_MESSAGE(this.CONSTANTS.MESSAGES.STORY_CREATION_SUCCESSFUL);
    } else {
      this.UTILS.SHOW_MESSAGE(this.CONSTANTS.MESSAGES.STORY_CREATION_FORM_INVALID);
    }
  }

  onReset() {
    this.isSubmitted = false;
    this.storyForm.reset();
  }

  showPlachoder(event) {
    event.target.src = this.CONSTANTS.DEFAULT_IMAGES.STORY_COVER;
  }

  addCoverImage(fileChooser: HTMLElement) {
    fileChooser.click();
  }

  updateCoverImage(event) {
    if (event.target.files) {
      this.coverImagePreviewUrl = URL.createObjectURL(event.target.files[0]);
      this.newStoryDetails.img = this.coverImagePreviewUrl;
    } else {
      this.UTILS.LOGGER.LOG_WARN('No File Choosen!');
    }
  }
}
