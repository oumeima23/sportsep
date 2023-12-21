import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  title:string=" Search Weather";
  searchForm:FormGroup;
weather:any;
  constructor( private formBuilder:FormBuilder,
     private weatherService:WeatherService) { }

  ngOnInit() {
    this.searchForm= this.formBuilder.group({
      city:["",Validators.required]
    })
   
  }
  search(){
      console.log("here object",this.searchForm.value);
      //  this.weatherService.searchWeather(this.searchForm.value).subscribe(
        (data)=>{
          console.log("here data from API",data.result);
          this.weather=data.result;
        //  })

    
    
  }


  

}

}
 