import Image from "next/image";

const courses = [
  {
    title: "ভার্সিটি ফাইনাল শট কোর্স",
    subtitle: "ভর্তি পরীক্ষার চূড়ান্ত প্রস্তুতি",
    price: 499,
    oldPrice: 1000,
    features: [
      "লাইভ + রেকর্ডেড ক্লাস",
      "ফাইনাল মডেল টেস্ট",
      "ডাউট সলভিং PDF",
      "অভিজ্ঞ শিক্ষক প্যানেল",
    ],
    image: "/assets/Medilogy__AAP_Cover.jpg",
  },
  {
    title: "ভার্সিটি ক + গুচ্ছ কোর্স",
    subtitle: "৬০ দিনে সম্পূর্ণ সিলেবাস",
    price: 0,
    oldPrice: 3000,
    features: [
      "ডেইলি লাইভ ক্লাস",
      "সাপ্তাহিক পরীক্ষা",
      "ফুল সিলেবাস কাভার",
      "ফেসবুক সাপোর্ট গ্রুপ",
    ],
    image: "/assets/Medilogy__AAP_Cover.jpg",
  },
];

export default function HomeCourses() {
  return (
    <section className="py-16 bg-[#070d1d] text-white">
      <div className="max-w-6xl mx-auto md:px-14 px-4">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">স্বপ্ন পূরণের কোর্স</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[#0e1530] rounded-2xl shadow-lg overflow-hidden border border-white/10"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={600}
                height={350}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  {course.subtitle}
                </p>

                <ul className="space-y-2 text-sm mb-6">
                  {course.features.map((f, i) => (
                    <li key={i}>🔥 {f}</li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-green-400">
                      ৳ {course.price}
                    </span>
                    {course.oldPrice > 0 && (
                      <span className="text-sm line-through text-gray-400 ml-2">
                        ৳ {course.oldPrice}
                      </span>
                    )}
                  </div>

                  <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-5 py-2 rounded-lg">
                    বিস্তারিত
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
