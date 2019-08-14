import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Story } from '../../models/story.modal';

@Component({
  selector: 'newstory',
  templateUrl: './newstory.component.html',
  styleUrls: ['./newstory.component.scss']
})
export class NewstoryComponent implements OnInit {
  storyForm : FormGroup;
  coverImagePreviewUrl: String;
  newStoryDetails: Story = new Story(true);
  
  constructor(private formBuilder : FormBuilder) { 
      this.storyForm = this.formBuilder.group({
          "title" : new FormControl(null, Validators.required),
          "summary" : new FormControl(null, Validators.required),
          "img" : new FormControl(null, Validators.required),
          "content" : new FormControl(null, Validators.required),
      });
      this.storyForm.valueChanges.subscribe((formData) => {
        this.updatePreview(formData);
      });
  }

  updatePreview(formData){
    for(let key in formData){
      this.newStoryDetails[key] = formData[key];
    }
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.storyForm);
  }

  onReset() {
    this.storyForm.reset();
  }

  showPlachoder(event){
    event.target.src = "assets/images/story-image.jpg";
  }

  addCoverImage(fileChooser : HTMLElement){
    fileChooser.click();
  }

  updateCoverImage(event){
    if(event.target.files){
      this.coverImagePreviewUrl = URL.createObjectURL(event.target.files[0]);
      console.log("Image URL - " + this.coverImagePreviewUrl);
    }else{
      console.log("No File Choosen!");
    }
  }

}
