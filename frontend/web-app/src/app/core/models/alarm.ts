export interface Alarm{
    id:string;
    description:string;
    name:string;
    type:string;
    action:string;
    applied_to:string;
    duration:number;
    image_url?:string;
}