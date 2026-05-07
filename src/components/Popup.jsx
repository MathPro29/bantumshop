import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";

export default function Popup() {
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      if (Object.values(data).every((value) => value !== "")) {
        console.log("Form data:", data);
        toast.success("สำเร็จ!");

        setTimeout(() => {
          setPopup(false);
          reset();
        }, 1000);
      } else {
        toast.error("กรุณากรอกข้อมูลให้ครบถ้วน");
      }
    } catch (error) {
      toast.error("เกิดข้อผิดพลาด");
      console.error(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div>
      <button className="member-btn" onClick={() => setPopup(true)}>
        Join Member+
      </button>
      <div className={`modal ${popup ? "isActive" : ""}`}>
        <div className="rounded-md p-4 bg-white popup">
          <div className="flex flex-row justify-between">
            <div className="w-full h-full flex justify-center items-center py-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-2xl font-bold">Be in our member</h1>
                <div className="flex justify-center items-center gap-5">
                  <div className="w-full">
                    <p>Firstname</p>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full border border-gray-300 rounded-md p-2"
                      {...register("firstname", {
                        required: "กรุณากรอกชื่อ",
                      })}
                    />
                    {errors.firstname && <p>{errors.firstname.message}</p>}
                  </div>
                  <div className="w-full">
                    <p>Lastname</p>
                    <input
                      placeholder="Last Name"
                      className="w-full border border-gray-300 rounded-md p-2"
                      type="text"
                      {...register("lastname", {
                        required: "กรุณากรอกนามสกุล",
                      })}
                    />
                    {errors.lastname && <p>{errors.lastname.message}</p>}
                  </div>
                </div>
                <div className="w-full">
                  <p>Email</p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("email", {
                      required: "กรุณากรอกอีเมล",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "รูปแบบอีเมลไม่ถูกต้อง",
                      },
                    })}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="w-full">
                  <p>Phone</p>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="0987654321"
                    {...register("phone", {
                      required: "กรุณากรอกเบอร์โทรศัพท์",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง",
                      },
                    })}
                  />
                  {errors.phone && <p>{errors.phone.message}</p>}
                </div>
                <div className="w-full flex justify-start items-center mt-5">
                  <button type="submit" disabled={loading} className="join-btn">
                    {loading ? "กำลังส่งข้อมูล..." : "JOIN!"}
                  </button>
                </div>
              </form>
            </div>
            <div className="close-btn " onClick={() => setPopup(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
