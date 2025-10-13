import {useParams, useSearchParams} from "react-router";
import {useEffect} from "react";

const UserPage = () => {

  const { userId } = useParams();

  const [ searchParams, setSearchParams ] = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {
    document.title = `CF8 User ${ name } with id ${ userId }`
  }, [userId, name]);

  return(
    <>
      <h1 className="text-center mt-12">User with id: { userId } and name: { name }</h1>
    </>
  )
}

export default UserPage;