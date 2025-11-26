export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <section className="max-w-5xl mx-auto text-center py-20">
        <h1 className="text-5xl font-extrabold text-gray-900">
          FitPulse Gym
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Your fitness journey starts here — train smart, stay consistent, and see results.
        </p>

        <div className="mt-10">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Join Now
          </a>
        </div>
      </section>

      <section id="contact" className="max-w-xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        {/* Contact Form Component */}
        <form className="space-y-4 bg-white p-6 rounded-lg shadow">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded h-24"
          ></textarea>

          <button className="bg-blue-600 text-white px-6 py-3 rounded w-full hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
