import {useState} from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

// ^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$
const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

const MultifieldFormWithValidation = () => {
  const [ values, setValues] = useState(initialValues)
  const [ submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [ errors, setErrors ] = useState<FormErrors>({});

  const validateForm = (values: FormValues) => {
    const errors: FormErrors = {};
    if (!values.name.trim()){
      errors.name = "Name is required";
    }
    if (!values.email.trim() || !emailRegex.test(values.email)){
      errors.email = "Email is required";
    }
    if (!values.message.trim() || values.message.length < 5) {
      errors.message = "Message is required";
    }
    return errors;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
    setErrors((prev) => {
      return {
        ...prev,
        [name]: undefined,
      }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(values);

    if (Object.keys(validationErrors).length > 0){
      setErrors(validationErrors);
      setSubmittedData(null);
      return;
    }

    setSubmittedData(values);
    setValues(initialValues);
    setErrors({});
  }

  const handleClear = () => {
    setValues(initialValues);
    setSubmittedData(null);
    setErrors({});
  }

  return(
    <>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4 mt-12">
        <div>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border rounded px-4 py-2"
          />
          {errors?.name && (
            <p className="text-cf-dark-red text-sm mt-1" >{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border rounded px-4 py-2"
          />
          {errors?.email && (
            <p className="text-cf-dark-red text-sm mt-1" >{errors.email}</p>
          )}
        </div>
        <div>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={5}
            placeholder="Message"
            className="w-full border rounded px-4 py-2"
          ></textarea>
          {errors?.message && (
            <p className="text-cf-dark-red text-sm mt-1" >{errors.message}</p>
          )}
        </div>
        <div className="flex gap-4">
          <button className="bg-cf-dark-red text-white px-4 py-2 rounded">
            Submit
          </button>
          <button
            onClick={handleClear}
            className="bg-cf-dark-gray text-white px-4 py-2 rounded">
            Clear
          </button>
        </div>
      </form>
      { submittedData && (
        <>
          <div className="mt-6 max-w-sm mx-auto border-t pt-4 text-cf-dark-gray space-y-2">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
          </div>
        </>
      )}
    </>
  )
}

export default MultifieldFormWithValidation;