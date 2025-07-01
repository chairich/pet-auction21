import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">🐦 ยินดีต้อนรับสู่เว็บประมูลนก</h1>
      <p className="mb-8 text-gray-600">เริ่มต้นการประมูลหรือเข้าร่วมรายการ</p>
      <div className="space-x-4">
        <Link href="/auctions"><button className="bg-blue-500 text-white px-4 py-2 rounded">ดูรายการประมูล</button></Link>
        <Link href="/create-auction"><button className="bg-green-500 text-white px-4 py-2 rounded">ลงประกาศขาย</button></Link>
      </div>
    </main>
  );
}
