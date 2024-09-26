"use client";
import PageLayout from "@/app/_components/pageLayout/pageLayout"
import { Fragment } from "react";
import FormInput from "@/app/_components/formElements/formInput"
import ConfirmButton from "@/app/_components/common/ConfirmBtn"

const CreateTrip = () => {

    const onTravelPlanCreate = function(){
            console.log("button clicked");
    }


    return( 
        <Fragment>
          
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                 <div className="h-32 rounded-lg" >
                    <FormInput
                    label = "Travel Plan Name"
                    id = "travel_plan_name"
                    placeholder="new travel plan"
                    type="text"
                    />
                    <FormInput 
                     label = "Main Destination"
                     id = "travel_plan_destination"
                     placeholder="Destination"
                     type="text"/>
                    <FormInput
                     label = "Start Date"
                     id = "travel_plan_Start_date"
                     placeholder=""
                     type="date"/>
                     <FormInput
                     label = "travel type"
                     id = "travel_plan_traveltype"
                     placeholder=""
                     type="text"/>
                    
                 </div>
                 <div className="h-32 rounded-lg ">
                 <FormInput
                    label = "No of participants"
                    id = "travel_plan_participants"
                    placeholder="Participants"
                    type="text"
                    />
                   <FormInput
                    label = "Estimated budget PP"
                    id = "travel_plan_budget"
                    placeholder="$1000"
                    type="text"
                    />
            
                    <FormInput
                     label = "End date"
                     id = "travel_plan_end_date"
                     placeholder=""
                     type="date"/>

                     <FormInput
                     label = "Agent ID"
                     id = "travel_plan_agent"
                     placeholder=""
                     type="text"/>


                    <div className="grid grid-cols-4 gap- lg:grid-cols-2 lg:gap-8 topmargin-30">
                    <div className="h-32 rounded-lg ">
                    <button style ={{marginLeft:"90px"}}type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Discard Changes</button>
                    </div>
                    <div className="h-32 rounded-lg .align-right">
                    <button
                        name="Create Travel Plan"
                        onClick={onTravelPlanCreate}
                        style ={{marginLeft:""}}type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                     >Create new travel plan</button>
                    </div>
                    </div>
                    
                 </div>
            </div>
          
        </Fragment>
    );
}

export default CreateTrip;