const FormInput = ({label,type,id,placeholder})=> {
    return (

<div className="formInput_createTravelPlan topmargin-30">
    <label
  htmlFor={id}
  className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
  <span className="text-xs font-medium text-gray-700"> {label} </span>

  <input
    type={type}
    id={id}
    placeholder={placeholder}
    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
  />
</label>
</div>
    )
}

export default FormInput;