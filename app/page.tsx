import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Minimalist Art Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 shadow-lg rounded-lg bg-white">
          <Image src="/art1.jpg" alt="Minimalist Art 1" width={500} height={500} objectFit="cover" />
          <h2 className="text-center mt-2 font-semibold">Silent Calm</h2>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-white">
          <Image src="/art2.jpg" alt="Minimalist Art 2" width={500} height={500} objectFit="cover" />
          <h2 className="text-center mt-2 font-semibold">Oceans Breath</h2>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-white">
          <Image src="/art3.jpg" alt="Minimalist Art 3" width={500} height={500} objectFit="cover" />
          <h2 className="text-center mt-2 font-semibold">Desert Whisper</h2>
        </div>
      </div>
    </main>
  );
}
