import Feed from "@/components/Feed";
import Header from "@/components/Header";
import UploadModel from "@/components/UploadModel";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Feed />

      <UploadModel />
    </div>
  );
}
