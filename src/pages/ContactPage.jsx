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
            <div className="w-full h-[340px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1682687220591-cfd91ab5c1b5?q=80&w=1000"
                alt="Feature image"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="mb-12 max-w-2xl">
              <h2 className="text-xl font-bold mb-3">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                We'd love to hear from you! Whether you have a touching mom story to share, want to collaborate, or just want to say hello—your thoughts matter to us.
              </p>
              <p className="flex items-center font-bold text-gray-800 mb-4">
                <span className="text-red-500 mr-2">❤️</span> Let's Celebrate Moms Together
              </p>
              <p className="text-gray-700">
                If you're a writer, artist, or simply someone with a story to tell—reach out. We'd love to feature your voice on our blog.
              </p>
            </div>
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