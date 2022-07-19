export type asset = {
    assetId: string; 
    asset:string;
    aprDaily:number;
    dateUpdated:string;
  }
  
  export type ResponseData = {
    data:asset[];
  }