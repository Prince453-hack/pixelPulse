import { getProviders, signIn } from "next-auth/react";
import Header from "@/components/Header";

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-[500px] rounded-sm"
          src="/pcc.png"
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex items-center flex-col">
              <img
                className="w-[250px] object-cover "
                src="/signin.png"
                alt="Sing In"
              />
              <p className="text-sm italic my-4 text-center">
                This App is just for Project Purpose
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              >
                Sign In with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
