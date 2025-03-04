
import Specifications from "../models/SpecificationsModel"

const specifications:Specifications[] = [];

export function addSpefications(specifation:Specifications):void{
    specifications.push(specifation)
    return;
}
export function findSpecificationByName(name: string): Specifications | undefined {
    return specifications.find(specifications => specifications.name === name);
  }
 

export function listSpecification():Specifications[]{
       return specifications;
}
