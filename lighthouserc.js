module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      staticDistDir: './public'
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
