/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "movies-king8",
  titleTemplate: "%s | moveis",
  defaultTitle: "muvees",
  description: "See your favorite movies",
  canonical: "https://www.moives.k8.dev",
  openGraph: {
    url: "https://www.moives.k8.dev",
    title: "muvees",
    description: "See your favorite movies",
    images: [
      {
        url: "https://og-image.sznm.dev/**muvees**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "muvees.sznm.dev og-image",
      },
    ],
    site_name: "movies",
  },
  twitter: {
    handle: "@x_6i7",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
