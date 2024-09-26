import ButtonGroup from "../common/buttonGroup"

const TravelPlanListRow = ({ travelPlan }) => {
    return (
      <tr>
        <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">{travelPlan.tripName}</td>
        <td className="whitespace-nowrap px-2 py-2 text-gray-700">{travelPlan.mainLocations.map((location)=>{
            return (location + " ")
        })}</td>
        <td className="whitespace-nowrap px-2 py-2 text-gray-700">{JSON.stringify(travelPlan.startDate)}</td>
        <td className="whitespace-nowrap px-2 py-2 text-gray-700">{JSON.stringify(travelPlan.endDate)}</td>
        <td className="whitespace-nowrap px-2 py-2 text-gray-700">{travelPlan.participants.length}</td>
        <td className="whitespace-nowrap px-2 py-2 text-right">
         
          <ButtonGroup></ButtonGroup>
        </td>
      </tr>
    );
  };
  
  export default TravelPlanListRow;
  