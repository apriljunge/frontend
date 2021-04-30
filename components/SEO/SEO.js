import Head from 'next/head';

export default function SEO({ title, metadata: origMetadata = {} }) {
  const metadata = origMetadata || {};

  if (Object.keys(metadata).length === 0) {
    metadata['twitter_image'] = {
      url: process.env.VERCEL_URL + '/public/twitter-preview.png'
    };

    metadata['facebook_image'] = {
      url: process.env.VERCEL_URL + '/public/facebook-preview.png'
    };
  }

  return (
    <Head>
      <title>{title} | SEEBRÜCKE</title>

      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />

      {metadata &&
        Object.keys(metadata).map((key) => {
          let prefix = '';
          let value = metadata[key];

          if (key.startsWith('facebook')) {
            prefix = 'og:';
          } else if (key.startsWith('twitter')) {
            prefix = 'twitter:';
          }

          if (prefix === 'twitter:' || prefix === 'og:') {
            const normalizedKey = key.split('_')[1];

            if (normalizedKey === 'image') {
              if (value?.url) {
                value = process.env.NEXT_PUBLIC_CMS_DOMAIN + value.url;
              } else {
                const baseURL = process.env.VERCEL_URL;
                value = baseURL + `/api/screenshot?url=${baseURL}`;
              }
            }

            if (!value) {
              return null;
            }

            return (
              <meta property={`${prefix}${normalizedKey}`} content={value} />
            );
          } else {
            return <meta name={key} content={value} />;
          }
        })}
    </Head>
  );
}
