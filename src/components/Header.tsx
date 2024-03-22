import { Link } from "./Link";

interface logoProps {
   logo: string;
}
export const Header = ({ logo }: logoProps) => {
   return (
      <header className="flex flex-col items-center justify-center min-h-screen text-white bg-dark-grayish-blue">
         <img
            className='h-[40vmin] pointer-events-none animate-spin'
            src={logo}
            alt="logo"
         />
         <Link
            url="https://react.dev/"
            title="Learn React"
         />
         <p>Edit <code>src/App.tsx </code>
            and save to reload</p>

      </header>
   )
}