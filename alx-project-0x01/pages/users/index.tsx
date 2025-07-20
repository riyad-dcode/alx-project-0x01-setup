import Button from "@/components/common/Button"
import UserCard from "@/components/common/UserCard"
import UserModal from "@/components/common/UserModal";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import { useState } from "react";

const User: React.FC<UserProps[]> =  ({ users }) => {
 const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);


  const handleAddPost = (newPost: UserData) => {
    setUser({ ...newPost, id: user.length + 1 });
  };



  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Post Content</h1>
          <button onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            user?.map(({ name, username, email, id }: UserProps, key: number) => (
              <UserCard name={name} username={username} email={email} id={id} key={key} />
            ))
          }
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default User
