import { Link, NavLink } from "react-router";

const HomePage = () => {
  return (
    <>
      <h1 className="text-2xl text-center my-12">Home Page</h1>
      <div className="flex flex-col items-start max-w-sm mx-auto gap-4">
      <Link
        to="/name-changer"
        className="bg-gray-200 w-full px-4 py-2 rounded"
      >
        Name changer Example
      </Link>
      <NavLink
        to="/timer"
        className="bg-gray-200 w-full px-4 py-2 rounded"
      >
        Timer Example
      </NavLink>
      </div>
    </>
  )
}
export default HomePage;