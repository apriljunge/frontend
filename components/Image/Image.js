import NextImage from 'next/image';

import HTML from '@/components/HTML';

export default function Image({
  image: { caption, url, width, height },
  className,
  ...props
}) {
  const imageProps = {
    src: `${process.env.NEXT_CMS_DOMAIN}${url}`,
    width: props?.layout === 'fill' ? undefined : width,
    height: props?.layout === 'fill' ? undefined : height,
    ...props
  };

  return (
    <figure className={`leading-none text-none ${className}`}>
      <NextImage {...imageProps} />

      {caption && (
        <figcaption className="font-rubik italic text-2xs p-5 text-gray-600">
          <HTML html={caption} />
        </figcaption>
      )}
    </figure>
  );
}