import Image from "next/legacy/image";

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props) => {
  return <Image alt="" loader={contentfulLoader} {...props} />;
};

export default ContentfulImage;
