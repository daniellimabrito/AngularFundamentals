import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  formTest: FormGroup;
  example = { userName: "Daniel", editorContent: "<b>Daniel Test works</b> <br> <h1>BBMP</h1><br><i>JESSICA</i>", ShouldReceiveEmailBroadcast: false, lastUpdateEndDate: new Date() };

  editorStyle = {
    height: '200px'
  };

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.initiateForm();
  }

  initiateForm() {
    this.formTest = this.formBuilder.group({
      userName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      editorContent: [null],
      ShouldReceiveEmailBroadcast: [null],
      lastUpdateEndDate: [null]
    });
  }

  private initForm() {
    this.formTest = new FormGroup({
      'courseName': new FormControl(null, Validators.required),
      'courseDesc': new FormControl(null),
      'courseAmount': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.formTest);

   // console.log(this.formTest.get('editorContent').value);

  
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formTest.value))
    .subscribe(
      res => {
        alert('Success');
        console.log(res);
       // this.formTest.reset();
      }, 
      error => {
        console.log(error);
        alert(error.message);
      });
      
  }

  isValidField(field) {
   // return !field.valid && field.touched;
    return !this.formTest.get(field).valid && this.formTest.get(field).touched;
  }

  applyCssError(field) {
    return {
      'has-error': this.isValidField(field),
      'has-feedback': this.isValidField(field)
    }
  }

}
