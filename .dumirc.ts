import { defineConfig } from 'dumi';

const logo =
  'https://imagev2.xmcdn.com/storages/f8d2-audiofreehighqps/81/43/GMCoOSYIO18uAAAvaAIdYbXD.png';

const publicPath =
  process.env.NODE_ENV === 'production'
    ? `/eco-react-cli/refs/heads/master/`
    : '/';

export default defineConfig({
  outputPath: 'site',
  themeConfig: {
    name: 'eco-react-cli',
    logo,
  },
  history: {
    type: 'hash',
  },
  hash: true,
  favicons: [logo],
  publicPath,
  alias: {
    images: '/docs/images',
  },
  resolve: {
    docDirs: ['docs'],
  },
});
