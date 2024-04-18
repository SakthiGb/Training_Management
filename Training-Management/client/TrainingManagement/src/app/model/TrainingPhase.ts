import { DetailPlan } from './DetailPlan';
import { PhaseMappingTechnology } from './PhaseMappingTechnology';

export class TrainingPhase{
    public id:number;
    public name:string;
    public duration:string;
    public description:string;
    public level:string;
    public detailPlanList: Array<DetailPlan>
    public technologyList: Array<PhaseMappingTechnology>
    public active:boolean;
}