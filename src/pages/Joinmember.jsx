export default function Joinmember() {
  const Submit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(firstname, lastname, email, phone);
  };
  return (
    <div className="w-full h-full flex justify-center items-center py-5">
      <form
        className="w-[80%] h-full flex justify-center items-center flex-col gap-5"
        action=""
      >
        <div className="flex justify-center items-center gap-5">
          <div>
            <p>Firstname</p>
            <input
              className="border border-gray-300 rounded-md p-2 required"
              type="text"
            />
          </div>
          <div>
            <p>Lastname</p>
            <input
              className="border border-gray-300 rounded-md p-2 required"
              type="text"
            />
          </div>
        </div>

        <p>Email</p>
        <input
          className="border border-gray-300 rounded-md p-2 required"
          type="text"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
