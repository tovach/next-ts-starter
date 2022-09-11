import Head from 'next/head';
import { NextPageWithLayout } from 'pages/page';
import { ReactElement } from 'react';

import { PrimaryLayout } from '@components/layouts/primary';

const Catalog: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Catalog page</title>
    </Head>
    <div>
      <h3>Catalog content</h3>
    </div>
  </>
);

Catalog.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Catalog;
