const ContactPage = () => {
  return (
    <div className="pt-[100px]">
      <section className="w-[1180px] mx-auto px-6">
        {/* Heading */}
        <h1 className="text-5xl font-serif font-semibold mb-12">Contact</h1>

        {/* Grid layout: left image + right form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left image + text */}
          <div>
            <div className="bg-gray-300 w-full h-[340px] flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed">
              Donec accumsan purus nec ligula volutpat posuere. Integer lectus lorem, mollis eget
              varius condimentum, vehicula eu arcu. Duis viverra orci vel pretium eleifend. Phasellus
              sit amet pellentesque risus. Nulla ut ex sit amet nisi malesuada semper.
            </p>
          </div>

          {/* Right form */}
          <form className="space-y-6">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 border-b border-gray-300 outline-none py-2 placeholder-gray-500 text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 border-b border-gray-300 outline-none py-2 placeholder-gray-500 text-sm"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border-b border-gray-300 outline-none py-2 placeholder-gray-500 text-sm"
            />

            <textarea
              placeholder="Your message"
              className="w-full border-b border-gray-300 outline-none py-2 placeholder-gray-500 text-sm resize-none"
              rows="4"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 text-sm font-medium"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
