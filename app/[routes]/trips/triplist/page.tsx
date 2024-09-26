import PageLayout from "@/app/_components/pageLayout/pageLayout";
import TravelPlanListRow from "@/app/_components/travelPlan/TravelPlanListRow";
import travelPlanData from "@/app/_data/data"
import { Fragment } from "react";

const TripList = () => {
  return (
    <Fragment>
      <div className="overflow-x-auto tripList">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">Name</th>
              <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">Destination</th>
              <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">Start Date</th>
              <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">End Date</th>
              <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 text-left">Participants</th>
              <th className="px-2 py-2 text-right"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {
                travelPlanData.map((travelPlan)=>{
                    return (
                        <TravelPlanListRow key={travelPlan._id} travelPlan={travelPlan} />
                    )
                })
            }
           
            {/* Add more <TravelPlanListRow /> components here if needed */}
          </tbody>
        </table>
      </div>
      </Fragment>
  );
};

export default TripList;
