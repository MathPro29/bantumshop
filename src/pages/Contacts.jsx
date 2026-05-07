export default function Contacts(){
   const contactData = {
        Role : "CEO",
        name: "Meow Meow",
        number: "061-xxx-xxxx"
    }
    return (
        <div className="flex flex-col justify-center items-center p-5 bg-gray-200">
            <h1 className="text-3xl font-bold pb-5">Contact US</h1>
            <div className="contact-card grid grid-cols-2 gap-4">
                <div className="flex justify-center items-center">
                   <img src="./src/assets/images/profile.jpg" alt="" className="contact-pho w-[250px] h-[250px] rounded-full" />
                </div>
                <div className="justify-center items-center flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">{contactData.name}</h1>
                    <h1 className="text-xl">{contactData.Role}</h1>
                    <h1 className="text-xl">{contactData.number}</h1>
                </div>
            </div>
        </div>
    )
}