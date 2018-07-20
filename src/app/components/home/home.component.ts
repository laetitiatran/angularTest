import { Component, OnInit } from '@angular/core';
import { Project } from './project.component';
import { FormBuilder, FormGroup ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

countryForm: FormGroup;
countries = ['Project500', 'Project404', 'Project200']
constructor(private fb: FormBuilder) {}

ngOnInit() {
this.countryForm = new FormGroup({
       countryControl: new FormControl()
    });
 console.log(this.countries)
 this.countryForm = this.fb.group({
   countryControl: ['Project404']
 });
}

}
