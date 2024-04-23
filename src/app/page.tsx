import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="py-3 ">
        <Link href="#">Bosh sahifa</Link>{' '}/{' '}
        <Link href="/profile" className="text-blue-500 font-medium">
          profile
        </Link>
      </div>
    </main>
  );
}
