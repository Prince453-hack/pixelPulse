import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center mb-5 justify-between max-w-6xl pt-5 mx-4 xl:mx-auto">
        <div className="h-25 w-25 relative hidden lg:inline-grid cursor-pointer">
          <Link href="/">
            <Image
              width={150}
              className="object-contain"
              height={150}
              src="/123.png"
              alt="Main Logo
            "
            />
          </Link>
        </div>
        <div className="h-25 w-10 relative lg:hidden cursor-pointer">
          <Link href="/">
            <Image
              width={150}
              className="object-contain"
              height={150}
              src="/456.png"
              alt="Main Logo
          "
            />
          </Link>
        </div>

        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md "
          />
        </div>

        <div className="flex space-x-4 items-center">
          <Link href="/">
            <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out" />
          </Link>

          {session ? (
            <>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="h-6 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
              />
              <Image
                onClick={signOut}
                src={session?.user?.image}
                alt="Profile"
                width={100}
                height={100}
                className="h-10 rounded-full w-10 cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}
