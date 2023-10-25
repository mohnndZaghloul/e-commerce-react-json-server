import Input from "./Input";

function Form() {
  const HandleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className="border-[1px] border-green-100 rounded-3xl shadow-xl py-10 px-10 sm:px-20 my-10">
      <div className="flex flex-wrap sm:flex-nowrap gap-2">
          <Input id='firstname' placeholder={"First Name"} type={'text'} isInput={true}/>
          <Input id='lastname' placeholder={"last Name"} type={'text'} isInput={true}/>
      </div>
      <Input id='email' placeholder={"Email"} type={'email'} isInput={true}/>
      <Input id='phone' placeholder={"Phone Number"} type={'tel'} isInput={true}/>
      <Input id='complaint' placeholder={"Complaint"} type={'text'} isInput={false}/>
      <button onClick= {HandleSubmit} className="btn shadow-2xl">Send</button>
    </form>
  )
}

export default Form;