import { tests } from '../../data/tests'; 

export async function generateMetadata({ searchParams }) {
  const getTests = await tests(); 
  const search = searchParams?.search || '';

  const filtered = search
    ? getTests.filter(
        (t) =>
          t.test_name.toLowerCase().includes(search.toLowerCase()) ||
          t.region.toLowerCase().includes(search.toLowerCase())
      )
    : getTests;

  const pageTitle = search
    ? `${search} Physical Assessment Tests | Test Guides`
    : 'Physical Assessment Test Guides | Learn Medical Tests';

  const pageDesc = search
    ? `Find guides and explanations for "${search}" physical assessment tests. Understand what happens during your exam and what results mean.`
    : 'Explore our library of physical assessment test guides. Easy-to-understand explanations of common orthopedic tests performed by therapists and doctors.';

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    name: 'Physical Assessment Test Guides',
    description: pageDesc,
    url: 'https://physioassessment.vercel.app/test',
    numberOfResults: filtered.length,
    itemListElement: filtered.slice(0, 20).map((test, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: test.test_name,
      description: test.purpose,
      url: `https://physioassessment.vercel.app/test/${test.slug}`,
    })),
  };

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: `physical assessment tests, ${search || 'orthopedic tests'}, medical tests, physical therapy, test guides`,
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      type: 'website',
      url: 'https://physioassessment.vercel.app/test',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDesc,
    },
    alternates: {
      canonical: 'https://physioassessment.vercel.app/test',
    },
    other: [
      {
        type: 'application/ld+json',
        content: JSON.stringify(schemaData),
      },
    ],
  };
}
