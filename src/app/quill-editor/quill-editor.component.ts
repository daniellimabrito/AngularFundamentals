import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.css']
})
export class QuillEditorComponent implements OnInit {
  @Input() editorContent: FormControl;

  editorStyle = {
    height: '200px'
  };

  constructor() { }

  ngOnInit() {
    this.editorContent = this.editorContent != null ? this.editorContent : new FormControl()
  }

}
