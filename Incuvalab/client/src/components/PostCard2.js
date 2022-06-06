import toast from "react-hot-toast";
import { usePosts2 } from "../context/postContext2";
import { useNavigate } from "react-router-dom";

export function PostCard2({ post }) {
  const { deletePost } = usePosts2();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">
            Confirmar pago? <strong>{id}</strong>?
          </p>
          <div>
            <button
              className="bg-pink-800 px-4 py-2 text-white hover:bg-pink-800"
              onClick={(e) => {
                deletePost(id);
                toast.dismiss(t.id);
              }}
            >
              Confirmar
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: "4000",
        style: {
          background: "#202020"
        }
      }
    );
  };
  return (
    <div
      className="bg-zinc-800 text-white rounded-md shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => navigate(`/${post.IdDonation}`)}
    >
      <div className="px-4 py-7">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold">{post.Mount}</h3>
          <button
            className="bg-pink-800 px-4 py-2 text-white hover:bg-pink-800"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(post.IdDonation);
            }}
          >
            Confirmar
          </button>
        </div>
        <p className="text-gray-400">{post.Title}</p>
      </div>
      {post.RegisterDate}
    </div>
  );
}