module.exports = {
  ci: {
    collect: {
      staticDistDir: './out', // 如果是 Next.js static export，或是你的打包目錄
      url: ['http://localhost:3000'],
      startServerCommand: 'npm run start',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};