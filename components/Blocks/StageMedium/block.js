import { FRAGMENT as FRAGMENT_MEDIA } from '@/components/Media';

export const FRAGMENT = `
  ... on ComponentSharedBlocksStageMedium {
    title
    kicker
    intro
    image {
      ${FRAGMENT_MEDIA}
    }
  }
`;

export default {
  name: 'StageMedium',
  Fragment: FRAGMENT
};
