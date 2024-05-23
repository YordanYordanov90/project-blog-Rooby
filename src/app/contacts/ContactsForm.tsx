

const ContactsForm = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 42.1354, // Latitude for Plovdiv, Bulgaria
    lng: 24.7453, // Longitude for Plovdiv, Bulgaria
  };

  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 py-24">
        <h1 className="text-7xl font-bold leading-none text-left tracking-tighter mb-8">
          Get in touch with <br /> our lovely team
        </h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex flex-col mb-8">
              <h2 className="text-2xl font-bold">Roooby Technologies</h2>
              <p>Plovdiv, Bulgaria, bul Vasil Levski 96</p>
            </div>
            <div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="flex flex-col space-y-4">
              <label className="font-semibold">
                Name
                <input
                  type="text"
                  className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                />
              </label>
              <label className="font-semibold">
                Email
                <input
                  type="email"
                  className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Email"
                />
              </label>
              <label className="font-semibold">
                Message
                <textarea
                  className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                  placeholder="Your Message"
                ></textarea>
              </label>
              <button
                type="submit"
                className="bg-indigo-500 text-white font-bold py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsForm;
