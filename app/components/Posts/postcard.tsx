import Link from "next/link";
import Avatar from "../Blogui/avatar";
import DateComponent from "../Blogui/date";
import ContentfulImage from "../Blogui/contentfulimage";
import React from "react";

const PostCard = ({ blogPost }) => {
  const { title, slug, coverImage, author, publishDate } = blogPost.fields;

  return (
    // <li className='overflow-hidden shadow-md postCard'>
    <Link
      href={`/blog/${slug}`}
      aria-label={title}
      className="group flex flex-col h-full border border-gray-700 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]">
      <div className="aspect-w-16 aspect-h-11">
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={coverImage.fields.file.url}
          width={coverImage.fields.file.details.image.width}
          height={coverImage.fields.file.details.image.height}
          className="w-full object-cover rounded-xl"
        />
      </div>
      <div className="my-6">
        <h3
          className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white"
          style={{ color: "#eaa023" }}>
          {title}
        </h3>
      </div>
      {/* <div className='text-sm mb-4  md:flex md:justify-between md:items-center text-white'>
        <Avatar
          name={author.fields.name}
          profilePicture={author.fields.profilePicture}
        />
        <DateComponent dateString={publishDate} options={undefined} />
      </div> */}
      {/* </div> */}
    </Link>
    // </li>
  );
};

export default PostCard;
