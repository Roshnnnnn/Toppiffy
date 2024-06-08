const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "This is the best chocolate I have ever tasted! The quality and flavor are unmatched.",
      name: "John Doe",
      location: "New York, USA",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "Absolutely delightful! The chocolate is so rich and creamy. Highly recommend!",
      name: "Jane Smith",
      location: "London, UK",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "I'm in love with this chocolate. The packaging is beautiful and the taste is exquisite.",
      name: "Samuel Johnson",
      location: "Sydney, Australia",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 mx-[3rem]">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <p className="text-lg italic mb-4">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="font-bold text-xl">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
