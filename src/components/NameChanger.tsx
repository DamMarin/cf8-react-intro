import {useState} from 'react';

const NameChanger = () =>  {
const [name, setName] = useState("");

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value);
}

return (
  <>
  <h1 className="text-center text-xl mt-12">Hello, {name || "Stranger"}</h1>
    <div className="text-center mt-4">
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter Your name"
        className="border px-4 py-2"
      />
    </div>
  </>
  )
}

export default NameChanger;