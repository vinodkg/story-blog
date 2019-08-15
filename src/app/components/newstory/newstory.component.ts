import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Story } from '../../models/story.modal';
import { DomSanitizer } from "@angular/platform-browser";
import { SafeUrl } from "@angular/platform-browser";
import { DataService } from 'src/app/services/dataservices/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'newstory',
  templateUrl: './newstory.component.html',
  styleUrls: ['./newstory.component.scss']
})
export class NewstoryComponent implements OnInit {
  storyForm : FormGroup;
  isSubmitted: boolean = false;
  coverImagePreviewUrl: string;
  newStoryDetails: Story = new Story(true);
  public imageUrl: SafeUrl;
  
  constructor(private formBuilder : FormBuilder,private sanitizer: DomSanitizer, private dataServices: DataService, private router: Router) { 
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

  updatePreview(formData : NgForm){
    for(let key in formData){
      if(key != "img"){
        this.newStoryDetails[key] = formData[key];
        continue;
      }
      if(key == "img" && !this.coverImagePreviewUrl){
        this.newStoryDetails["img"] = "assets/images/story-image.jpg";
      }
    }
    this.dataServices.viewStoryDetails(this.newStoryDetails);
  }

  ngOnInit() {
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.storyForm.valid){
      this.newStoryDetails.createdon = new Date().getTime();
      this.newStoryDetails.id = new Date().getTime() + "";
      this.dataServices.addStories(this.newStoryDetails);
      this.router.navigate(['']);
      window.alert("Your story added successfully!");
    } else {
      window.alert("Please fill all the details!");
    }
  }

  onReset() {
    this.isSubmitted = false;
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
      this.newStoryDetails["img"] = this.coverImagePreviewUrl;
    }else{
      console.log("No File Choosen!");
    }
  }

}
