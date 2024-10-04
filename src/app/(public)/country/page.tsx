import Link from "next/link"
import Nav from "../../components/nav"

export default function Country(){

    return(
        
        <div>
        <Nav/>
        <div className="h-max w-80 bg-white m-auto pb-6 mt-20 rounded-3xl shadow-black shadow-lg">
          <h1 className="text-4xl text-center py-8 text-black font-bold">Country List</h1>
          <ul className="list-none flex justify-center flex-col items-center gap-4 text-center">
    <li className="text-lg py-2 bg-sky-400 rounded-lg w-64 duration-200 hover:ease-linear hover:scale-105 hover:bg-white">
      <Link className="p-4 py-2 block text-black hover:text-sky-400" href={"/country/pakistan"}>
        Pakistan
      </Link>
    </li>

    <li className="text-lg py-2 bg-sky-400 rounded-lg w-64 duration-200 hover:ease-linear hover:scale-105 hover:bg-white">
      <Link className="p-4 py-2 block text-black hover:text-sky-400" href={"/country/russia"}>
        Russia
      </Link>
    </li>

    <li className="text-lg py-2 bg-sky-400 rounded-lg w-64 duration-200 hover:ease-linear hover:scale-105 hover:bg-white">
      <Link className="p-4 py-2 block text-black hover:text-sky-400" href={"/country/america"}>
        America
      </Link>
    </li>

    <li className="text-lg py-2 bg-sky-400 rounded-lg w-64 duration-200 hover:ease-linear hover:scale-105 hover:bg-white">
      <Link className="p-4 py-2 block text-black hover:text-sky-400" href={"/country/turkey"}>
        Turkey
      </Link>
    </li>
  </ul>
</div>

        </div>
    )
}
