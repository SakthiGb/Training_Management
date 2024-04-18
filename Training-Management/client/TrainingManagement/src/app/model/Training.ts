
import { Streams } from "./Streams";
import { StreamType } from "./StreamType";

export class Training {
    public id:number=null;
    public name: string;
    public streams: Streams
    public streamType: StreamType
    public description: any;
    public active: Boolean;
    public duration: any;
    public status :any;
}