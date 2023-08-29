import ContentfulImage from "./contentfulimage";

const Avatar = ({ name, profilePicture }) => {
  return (
    <div className="flex items-center">
      <div className="relative w-10 h-10 mr-4">
        <ContentfulImage
          src={profilePicture && profilePicture.fields.file.url}
          layout="fill"
          className="h-[2.875rem] w-[2.875rem] rounded-full"
          alt={name}
        />
      </div>
      <div className="font-semibold">{name}</div>
    </div>
  );
};

export default Avatar;
