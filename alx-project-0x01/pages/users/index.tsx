import Button from "@/components/common/Button"
import PostCard from "@/components/common/PostCard"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Click Me" styles="small bg-blue-500 text-white rounded-sm" />
      <PostCard title="Submit" styles="large bg-green-500 text-white rounded-md" />
    </div>
  )
}


export default Landing
