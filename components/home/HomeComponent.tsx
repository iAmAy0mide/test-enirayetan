'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomeComponent() {
    const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome, Enirayetan Kehinde Jonathan!
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Best wishes for your test project. Show your skills and have fun coding!
      </p>
      <Button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => router.push("https://github.com/peppe180902/test-enirayetan/tree/branch-enirayetan")}
      >
        Start the Test
      </Button>
    </div>
  );
}