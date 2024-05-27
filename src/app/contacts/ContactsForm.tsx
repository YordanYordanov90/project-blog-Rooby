import Image from "next/image";

const ContactsForm = () => {
  return (
    <>
      <div className="bg-[#F4F4F4] min-h-screen  ">
        <div className="container mx-auto max-w-7xl px-4 py-16">
          <h1 className="text-7xl font-bold leading-none text-left tracking-tighter mb-8">
            Get in touch with <br /> our lovely team
          </h1>
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-bold mt-4">Roooby Technologies</h2>
                <p className="font-medium">
                  Plovdiv, Bulgaria, bul Vasil Levski 96
                </p>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.4245432803646!2d24.74086947606983!3d42.162599647553655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd18de452a06b%3A0x838e93baa43989e5!2sSeveren%2C%20Vasil%20Levski%20St%2096%2C%204003%20Plovdiv!5e0!3m2!1sen!2sbg!4v1716491079609!5m2!1sen!2sbg"
                  width="458"
                  height="288"
                  style={{ border: "0" }}
                  loading="lazy"
                ></iframe>
              </div>
              <div className="flex flex-row gap-20 mt-4 pt-4 ">
                <div className="border-l border-black pl-4">
                  <h3 className="font-bold">General</h3>
                  <p>hello@me.com</p>
                </div>
                <div className="border-l border-black pl-4 ml-4">
                  <h3 className="font-bold">Support</h3>
                  <p>support@me.com</p>
                </div>
              </div>
            </div>
            <div className=" p-8 rounded-xl ">
              <form className="flex flex-col space-y-4">
                <label className="font-semibold">
                  <input
                    type="text"
                    className="mt-2 p-2 py-4 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Your Name"
                  />
                </label>
                <label className="font-semibold">
                  <input
                    type="email"
                    className="mt-2 p-2 py-4 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Your Email"
                  />
                </label>
                <label className="font-semibold">
                  <textarea
                    className="mt-2 p-2 w-full w-555 h-190 resize-none border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    rows={8}
                    placeholder="Your Message"
                  ></textarea>
                </label>
                <button
                  type="submit"
                  className="bg-[#00CC61] w-[206px]  text-center  text-white font-bold py-3  text-sm rounded-md hover:bg-[#00B057] "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center gap-14 justify-center my-14'>
        <p className='font-medium pr-10'>Our clients and partners</p>
        <Image src="/Google.png" alt="image" width={100} height={25} />
        <Image src="/Atlassian.png" alt="image" width={100} height={25} />
        <Image src="/Canon.png" alt="image" width={100} height={25} />
        <Image src="/Walmart.png" alt="image" width={100} height={25} />
        <Image src="/Amazon.png" alt="image" width={100} height={25} />
      </div>
    </>
  );
};

export default ContactsForm;
