import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'newstory',
  templateUrl: './newstory.component.html',
  styleUrls: ['./newstory.component.scss']
})
export class NewstoryComponent implements OnInit {
  storyForm : FormGroup;
  
  constructor(private formBuilder : FormBuilder) { 
      this.storyForm = this.formBuilder.group({
          "title" : "",
          "summary" : "",
          "img" : "",
          "content" : ""
      });
  }

  ngOnInit() {
  }

}
