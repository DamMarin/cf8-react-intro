import {useState} from "react";
import { z } from "zod"

const formSchema = z.object ({
  name: z.string().trim().min(1, {error: "Name is required"}),
  email: z.email({error: "Invalid email"}).min(1, {error: "Email is required"}),
  message: z
    .string()
    .trim()
    .min(5, {error: "Message must be at least 5 characters long"})
    .max(8, {error: "Message must be at most 8 characters long"})
});

type FormValues = z.infer<typeof formSchema>;

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


const MultifieldFormWithZod = () => {
  const [ values, setValues] = useState(initialValues)
  const [ submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [ errors, setErrors ] = useState<FormErrors>({});

  const validateForm = (): boolean => {

    const result = formSchema.safeParse(values);
    // {success: true, data: validatedData}
    // {success: false, error: ZodError}

    if (!result.success){
      console.log(result.error.issues);
      const newErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof FormValues;
        newErrors[fieldName] = issue.message;
      });
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
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
    const isValid = validateForm()
    if (isValid){
      setSubmittedData(values);
      setValues(initialValues);
      setErrors({});
    }
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

export default MultifieldFormWithZod;