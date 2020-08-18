import { Component, OnInit } from '@angular/core';
import { SpaceXFilterService } from './space-xfilter.service'
@Component({
  selector: 'app-space-xfilter',
  templateUrl: './space-xfilter.component.html',
  styleUrls: ['./space-xfilter.component.css']
})
export class SpaceXFilterComponent implements OnInit {
  spaceXFilterProgrammes :any = [];
  launchQueryString:string;
  landingQueryString:string;
  queryStringArray:any = [];
  filterYears: any =[{"yearName":"y1","yearValue": "2006"},
                     {"yearName":"y2","yearValue": "2007"},
                     {"yearName":"y3","yearValue": "2008"},
                     {"yearName":"y4","yearValue": "2009"},
                     {"yearName":"y5","yearValue": "2010"},
                     {"yearName":"y6","yearValue": "2011"},
                     {"yearName":"y7","yearValue": "2012"},
                     {"yearName":"y8","yearValue": "2013"},
                     {"yearName":"y9","yearValue": "2014"},
                     {"yearName":"y10","yearValue": "2016"},
                     {"yearName":"y11","yearValue": "2017"},
                     {"yearName":"y12","yearValue": "2018"},
                     {"yearName":"y13","yearValue": "2019"},
                     {"yearName":"y14","yearValue": "2020"}

                    ];
  filterByString ="";
  constructor(private spaceXFilterService : SpaceXFilterService) { }

  ngOnInit(): void {
   let queryData = '';
    this.gettingProgramsList(queryData);
  }
  
   gettingProgramsList(queryData){
    this.spaceXFilterService.getSpaceXFilters(queryData).subscribe((data)=>{     
      this.spaceXFilterProgrammes = data;
    }) 
   }
   selectLaunch(launchValue){
     if(launchValue == 'success_launch_true'){
      this.launchQueryString = '&launch_success=true'
      this.queryStringArray.push(this.launchQueryString);
     }else{
      const index = this.queryStringArray.indexOf(this.launchQueryString);
      if (index > -1) {
        this.queryStringArray.splice(index, 1);
      }
      
     // this.launchQueryString = '';   

     }
     this.gettingProgramsList(this.queryStringArray);
   }
   selectLanding(landingValue){
    if(landingValue == 'success_landing_true'){
      this.landingQueryString = '&land_success=true';
      this.queryStringArray.push(this.landingQueryString);
     }else{
      const index = this.queryStringArray.indexOf(this.landingQueryString);
      if (index > -1) {
        this.queryStringArray.splice(index, 1);
      }
      //this.landingQueryString = '';
     }
     this.gettingProgramsList(this.queryStringArray);
   }
   selectedFilter(selectedValue){
    
    if(selectedValue){
      console.log("selectedValueYear",selectedValue);
      this.filterByString = '&launch_year=' + selectedValue;
      this.queryStringArray.push(this.filterByString);
      selectedValue='';
      this.filterByString=''
      
    }else{
      const index = this.queryStringArray.indexOf(this.filterByString);
      if (index > -1) {
        this.queryStringArray.splice(index, 1);
      }
      //this.filterByString = '';
    }
    this.gettingProgramsList(this.queryStringArray);    
  }
}
