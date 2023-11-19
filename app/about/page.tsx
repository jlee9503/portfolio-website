import Image from "next/image";
import Container from "../Container";

const data = {
  title: "About",
  introduction:
    "Hi, I'm Jungsu. Software Developer - Over 2 years experience in web development. Eager to explore my creativity and new technologies. I enjoy working on both frontend and backend, converting unstructured and complex dataset to nice and clean visual application. I consider myself to be a fast-learner, able to grasp new concepts quickly with excellent capacity to remember new information. Over the past 2 years, I worked in healthcare management company, building web/desktop application, creating visual displays of clinical/patient data and updating database structure.",
  profilePic: "/images/profile.jpg",
};

const About = () => {
  return (
    <Container className="min-h-screen flex justify-center items-center w-full px-32">
      <div className="basis-2/3">
        <h2 className="font-semibold text-2xl">{data.title}</h2>
        <p>{data.introduction}</p>
      </div>
      <div className="basis-1/3 flex justify-center items-center">
        <Image
          src={data.profilePic}
          alt="profile-picture"
          width={300}
          height={250}
          className="rounded-lg"
        />
      </div>
    </Container>
  );
};

export default About;
