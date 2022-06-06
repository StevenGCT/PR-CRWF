import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useParams } from "react-router-dom";
import * as Yup from "yup";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";


export function Donate() {
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
  });
  const params = useParams();

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id);
        setPost(post);
      }
    })();
  }, [params.id, getPost]);
  

 return (
    <div className="flex items-center justify-center">
      <div className="p-10 shadow-md shadow-black"
      style={{backgroundColor: "#5f1f20 "}}
      >
        <header className="flex justify-between items-center py-4 text-white">
          <h3 className="text-xl">Donaciones</h3>
          <Link to="/" className="text-white text-sm hover:text-white">
            Volver
          </Link>
        </header>
        <Formik
          initialValues={post}
          enableReinitialize
          validationSchema={Yup.object({
            title: Yup.string().required("Title is Required"),
            description: Yup.string().required("Description is Required"),
          })}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updatePost(params.id, values);
            } else {
              await createPost(values);
            }
            // actions.resetForm();
            actions.setSubmitting(false);
            navigate("/");
          }}
        >
          {({ setFieldValue, isSubmitting, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <label
                htmlFor="title"
                className="text-sm block font-bold mb-2 text-white"
              >
                Montos a donar
              </label>
              <select className="px-3 py-2 focus:outline-none rounded text-white w-full"
               style={{backgroundColor: "#38504F "}}>
                <option value="5">5$</option>
                <option value="10">10$</option>
                <option selected value="20">20$</option>
                <option value="50">50$</option>
              </select>
              

              <label
                htmlFor="description"
                className="text-sm block font-bold mb-2 text-white"
              >
                Palabras de Apollo
              </label>
              <Field
                component="textarea"
                name="description"
                id="description"
                placeholder="Escribe palabras de apollo"
                rows="3"
                className="px-3 py-2 focus:outline-none rounded text-white w-full"
                style={{backgroundColor: "#38504F "}}
              />

              <button
                type="submit"
                className="bg-pink-800 hover:bg-pink-800 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                ) : (
                  "Donar"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
