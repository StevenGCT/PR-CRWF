import { usePosts2 } from "../context/postContext2";
import { PostCard2 } from "../components/PostCard2";
import { VscEmptyWindow } from "react-icons/vsc";

export function Confirmation(){
    const { posts } = usePosts2();

  const renderPost = () => {
    if (posts.length === 0)
      return (
        <div className="flex flex-col justify-center items-center">
          <VscEmptyWindow className="w-48 h-48 text-white" />
          <h1 className="text-white text-2xl">No hay confirmaciones</h1>
        </div>
      );

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostCard2 key={post.IdDonation} post={post} />
        ))}
      </div>
    );
  };
  
  return (
    <main>
      <header className="flex justify-between items-center my-4">
        <h1 className="text-2xl text-gray-300 font-bold">
          Confirmaciones ({posts.length})
        </h1>    
      </header>

      {renderPost()}
    </main>
  );
}