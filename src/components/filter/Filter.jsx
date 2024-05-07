
import { experience, jobType, noOfEmployee, rolesOptions, techStack } from "../../utils/dropdown";
import { MultiAutocomplete } from "../dropdown/DropDown";

function Filter() {
    return ( <div className="flex flex-wrap items-end">
    <MultiAutocomplete title={'Roles'} options={rolesOptions}  ></MultiAutocomplete>
    <MultiAutocomplete title={' Employees'} options={noOfEmployee} ></MultiAutocomplete>
    <MultiAutocomplete title={'Experience'} options={experience}></MultiAutocomplete>
    <MultiAutocomplete title={'Remote'} options={jobType}></MultiAutocomplete> 
    <MultiAutocomplete title={'Tech Stack'} options={techStack}></MultiAutocomplete>
    </div> );
}

export default Filter;