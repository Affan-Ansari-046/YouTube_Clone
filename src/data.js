export const API_KEY = 'AIzaSyBZiw0wvF8PpLDqwPMlWy3f3bCXlyCtX7U';

export const value_converter=(value)=>{
    if(value>1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value >=1000){
        return Math.floor(value/1000)+"K";
    }else{
        return value;
    }
}