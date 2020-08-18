import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SpaceXFilterService {
  
  constructor(
    private httpClient: HttpClient
  ) { }

  public getSpaceXFilters(queryData){
    console.log("queryStringArray",queryData)
    
    let filterAPIurl;
    if(queryData == '' || queryData == undefined){
      queryData=[];
    }
    if(queryData != '' && queryData != undefined && queryData.length > 0){
      let qDataString='';
      for (let i=0;i<queryData.length;i++){
        qDataString += queryData[i];
      }
      console.log("queryStringArray",queryData)
      filterAPIurl = "https://api.spaceXdata.com/v3/" +'launches?limit=100'+`${qDataString}`;
    }
    else{     
      filterAPIurl = "https://api.spaceXdata.com/v3/" +'launches?limit=100';
    }
    return this.httpClient.get(filterAPIurl);
  }
}
