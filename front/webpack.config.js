import path from 'path';

export default {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve('src')
    }
  }
};
